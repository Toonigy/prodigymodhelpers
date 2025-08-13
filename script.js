document.addEventListener('DOMContentLoaded', () => {
    // This is an example of a list of available game versions.
    // The first version has been updated to 1-50-0.
    const versions = [
        { name: "Prodigy 1.50.0", value: "1-50-0" },
        { name: "Prodigy 1.60.0", value: "1-60-0" },
        { name: "Prodigy 1.70.0", value: "1-70-0" }
    ];

    const versionSelector = document.getElementById('versionSelector');
    const loadVersionButton = document.getElementById('loadVersionButton');

    // Populate the dropdown menu with versions
    versions.forEach(version => {
        const option = document.createElement('option');
        option.value = version.value;
        option.textContent = version.name;
        versionSelector.appendChild(option);
    });

    // Enable/disable the button based on selection
    versionSelector.addEventListener('change', (event) => {
        if (event.target.value) {
            loadVersionButton.disabled = false;
        } else {
            loadVersionButton.disabled = true;
        }
    });

    // Handle button click
    loadVersionButton.addEventListener('click', () => {
        const selectedVersion = versionSelector.value;
        if (selectedVersion) {
            alert(`Loading version: ${selectedVersion}. This would redirect you to the modded version's page.`);
            // In a more complex setup, you would use this to redirect to
            // a specific page, for example: `window.location.href = `/${selectedVersion}/index.html`;`
        }
    });
});
