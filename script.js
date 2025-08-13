document.addEventListener('DOMContentLoaded', () => {
    const versions = [
        { name: "Prodigy 1.50.0", value: "1-50-0" },
        { name: "Prodigy 1.60.0", value: "1-60-0" },
        { name: "Prodigy 1.70.0", value: "1-70-0" }
    ];

    const versionSelector = document.getElementById('versionSelector');
    const loadVersionButton = document.getElementById('loadVersionButton');

    versions.forEach(version => {
        const option = document.createElement('option');
        option.value = version.value;
        option.textContent = version.name;
        versionSelector.appendChild(option);
    });

    versionSelector.addEventListener('change', (event) => {
        if (event.target.value) {
            loadVersionButton.disabled = false;
        } else {
            loadVersionButton.disabled = true;
        }
    });

    loadVersionButton.addEventListener('click', () => {
        const selectedVersion = versionSelector.value;
        if (selectedVersion === '1-50-0') {
            // Redirect to the tutorials page for version 1-50-0
            window.location.href = '1-50-0_tutorials.html';
        } else {
            // For other versions, a placeholder alert is shown
            alert(`Tutorials for version ${selectedVersion} are not yet available.`);
        }
    });
});
