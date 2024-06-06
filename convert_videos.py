import os
import subprocess

input_dir = 'videos'
output_dir = 'new'

if not os.path.exists(output_dir):
    os.makedirs(output_dir)

for video_file in os.listdir(input_dir):
    if video_file.endswith('.mov'):
        input_path = os.path.join(input_dir, video_file)
        output_path = os.path.join(output_dir, video_file.replace('.mov', '.mp4'))

        # ffmpeg command to convert and compress video
        command = [
            'ffmpeg',
            '-i', input_path,  # Input file path
            '-vf', 'scale=500:500',  # Resize filter
            '-c:v', 'libx264',  # Video codec
            '-preset', 'slow',  # Preset for compression quality and encoding speed
            '-crf', '28',  # Constant rate factor for quality (lower is better quality but larger file)
            '-c:a', 'aac',  # Audio codec
            '-b:a', '128k',  # Audio bitrate
            '-y',  # Overwrite output files without asking
            output_path  # Output file path
        ]
        subprocess.run(command)

print("Conversion completed!")
