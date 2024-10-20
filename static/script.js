document.addEventListener('DOMContentLoaded', () => {
    const animalSelect = document.getElementById('animal-select');
    const imageContainer = document.getElementById('image-container');
    const fileInput = document.getElementById('file-input');
    const uploadButton = document.getElementById('upload-button');
    const fileInfo = document.getElementById('file-info');

    animalSelect.addEventListener('change', (event) => {
        const selectedAnimal = event.target.value;
        if (selectedAnimal) {
            const img = document.createElement('img');
            img.src = `/static/${selectedAnimal}.jpg`;
            img.alt = selectedAnimal;
            imageContainer.innerHTML = '';
            imageContainer.appendChild(img);
        } else {
            imageContainer.innerHTML = '';
        }
    });

    uploadButton.addEventListener('click', () => {
        const file = fileInput.files[0];
        if (file) {
            const formData = new FormData();
            formData.append('file', file);

            fetch('/upload', {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                const fileSizeInMB = (data.filesize / (1024 * 1024)).toFixed(2);
                fileInfo.innerHTML = `
                    <p>File Name: ${data.filename}</p>
                    <p>File Size: ${data.filesize} bytes (${fileSizeInMB} MB)</p>
                    <p>File Type: ${data.filetype}</p>
                `;
            })
            .catch(error => {
                console.error('Error:', error);
                fileInfo.innerHTML = '<p>An error occurred during file upload.</p>';
            });
        } else {
            fileInfo.innerHTML = '<p>Please select a file to upload.</p>';
        }
    });
});
