# Videos Directory

## Hero Video Setup

To add the Pexels video to your hero section:

1. **Download the video from Pexels:**
   - Go to: https://www.pexels.com/video/5246505/
   - Click "Free Download"
   - Choose a quality (recommended: 1920x1080 for web optimization)
   - Save the file as `hero-video.mp4` in this directory

2. **Alternative direct download:**
   ```bash
   # From your project root directory, run:
   curl -L "https://player.vimeo.com/external/[VIDEO_ID].mp4" -o "public/videos/hero-video.mp4"
   ```

3. **Video specifications:**
   - Format: MP4
   - Recommended resolution: 1920x1080 or 1280x720
   - File size: Keep under 10MB for optimal loading
   - Duration: The video will loop automatically

4. **If you need to compress the video:**
   ```bash
   # Using ffmpeg (if installed)
   ffmpeg -i original-video.mp4 -vcodec libx264 -crf 28 -preset fast public/videos/hero-video.mp4
   ```

The hero section is already configured to use the video once it's placed in this directory.
