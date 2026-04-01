from fastapi import FastAPI, File, UploadFile, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import Response
from rembg import remove, new_session
import io
from PIL import Image

app = FastAPI(title="Background Removal API", description="Full-stack AI Background Removal", version="1.0.0")

# Setup CORS for frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Lazy-load the session to avoid reload conflicts
_session = None

def get_session():
    global _session
    if _session is None:
        print("Loading rembg session with birefnet-general model...")
        _session = new_session("birefnet-general")
        print("Session loaded successfully!")
    return _session

@app.post("/api/remove-bg", summary="Remove background from image")
async def remove_background(file: UploadFile = File(...)):
    try:
        contents = await file.read()
        input_image = Image.open(io.BytesIO(contents))
        
        # Ensure RGBA mode for transparency support
        if input_image.mode != "RGBA":
            input_image = input_image.convert("RGBA")
        
        session = get_session()
        output_image = remove(input_image, session=session)
        
        img_byte_arr = io.BytesIO()
        output_image.save(img_byte_arr, format='PNG')
        img_byte_raw = img_byte_arr.getvalue()
        
        return Response(content=img_byte_raw, media_type="image/png")
        
    except Exception as e:
        print(f"Error processing image: {e}")
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/api/health", summary="Health check endpoint")
async def health_check():
    return {"status": "ok"}
