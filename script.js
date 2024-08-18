let selectedImage = null;

// Handle image selection from div2
document.querySelectorAll('.draggable-image').forEach(img => {
    img.addEventListener('click', function() {
        // Remove previous selection if any
        document.querySelectorAll('.draggable-image').forEach(img => img.classList.remove('selected'));
        
        // Mark this image as selected
        selectedImage = this;
        selectedImage.classList.add('selected');
    });
});

// Handle click on images in div1
document.querySelectorAll('.dropzone-img').forEach(img => {
    img.addEventListener('click', function() {
        if (selectedImage) {
            // Clone the selected image and append it to the dropzone item
            const clone = selectedImage.cloneNode();
            clone.classList.remove('selected');
            clone.classList.add('dropped-image');
            this.parentNode.appendChild(clone);
            
            // Clear the selection
            selectedImage = null;
            document.querySelectorAll('.draggable-image').forEach(img => img.classList.remove('selected'));
        }
    });
});
