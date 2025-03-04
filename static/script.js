document.addEventListener('DOMContentLoaded', function() {
    const videoInput = document.getElementById('video');
    const selfieInput = document.getElementById('selfie');
    const videoPreview = document.getElementById('videoPreview');
    const selfiePreview = document.getElementById('selfiePreview');

    // Video file preview
    videoInput.addEventListener('change', function(event) {
        const file = event.target.files[0];
        if (file) {
            const fileURL = URL.createObjectURL(file);
            videoPreview.src = fileURL;
            videoPreview.style.display = 'block';
        }
    });

    // Selfie file preview
    selfieInput.addEventListener('change', function(event) {
        const file = event.target.files[0];
        if (file) {
            const fileReader = new FileReader();
            fileReader.onload = function(e) {
                selfiePreview.src = e.target.result;
                selfiePreview.style.display = 'block';
            };
            fileReader.readAsDataURL(file);
        }
    });

    // Optional: Webcam video capture (requires additional browser permissions)
    function startWebcamCapture() {
        navigator.mediaDevices.getUserMedia({ video: true })
            .then(function(stream) {
                videoPreview.srcObject = stream;
                videoPreview.play();
                videoPreview.style.display = 'block';
            })
            .catch(function(err) {
                console.error("Error accessing webcam: ", err);
            });
    }

    // Uncomment if you want to auto-start webcam
    // startWebcamCapture();
});
