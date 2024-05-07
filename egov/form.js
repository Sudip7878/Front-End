const form = document.getElementById('myForm');
const addSectionButton = document.getElementById('addSection');
const fileInput = document.getElementById('file');
const fileTypeSelect = document.getElementById('fileType');

addSectionButton.addEventListener('click', addSection);

function addSection() {
  const newSection = document.createElement('div');
  newSection.classList.add('section');

  newSection.innerHTML = `
    <label for="country">Title:</label>
    <input type="text" name="title" required>

    <label for="body">Upload PDF</label>
    <input type="file" name="file" required>

    <button type="button" class="remove-section">Remove Section</button>
  `;

  form.insertBefore(newSection, document.getElementById('addSection'));

  const removeSectionButton = newSection.querySelector('.remove-section');
  removeSectionButton.addEventListener('click', function() {
    this.parentElement.remove();
  });
}

fileInput.addEventListener('change', function() {
  const fileType = fileTypeSelect.value;
  const allowedExtensions = fileType === 'pdf' ? ['pdf'] : ['json'];
  const extension = this.files[0].name.split('.').pop().toLowerCase();

  if (!allowedExtensions.includes(extension)) {
    alert('Invalid file type. Please select a ' + fileType + ' file.');
    this.value = '';
  }
});