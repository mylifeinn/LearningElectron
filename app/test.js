const { dialog } = require('electron').remote;
const getFileFromUser = () => {
    const files = dialog.showOpenDialog({
        properties: ["openFile"]
    });
    if (!files) { return; }
    console.log(files);
};

getFileFromUser();