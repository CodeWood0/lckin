import os

# Directory containing the videos
video_dir = 'videos'

# Output text file that will contain the names
output_file = 'video_list.txt'

# Open the output file in write mode
with open(output_file, 'w') as file:
    # List all files in the video directory
    for filename in os.listdir(video_dir):
        # Check if the file is an MP4 video
        if filename.endswith('.mp4'):
            # Write the filename to the text file
            file.write(filename + '\n')

print("Video list has been written to", output_file)
