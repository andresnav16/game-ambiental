let selectedImage = null;

document.querySelectorAll('.draggable-image').forEach(img => {
    img.addEventListener('click', function() {
        // Remove previous selection if any
        document.querySelectorAll('.draggable-image').forEach(img => img.classList.remove('selected'));
        
        selectedImage = this;
        selectedImage.classList.add('selected');
    });
});

document.querySelectorAll('.dropzone-img').forEach(img => {
    img.addEventListener('click', function() {
        if (selectedImage) {
            // Clone the selected image and append it to the dropzone item
            const clone = selectedImage.cloneNode();
            clone.classList.remove('selected');
            clone.classList.add('dropped-image');
            this.parentNode.appendChild(clone);
            
            selectedImage = null;
            document.querySelectorAll('.draggable-image').forEach(img => img.classList.remove('selected'));
        }
    });
});
