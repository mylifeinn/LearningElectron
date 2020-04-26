const marked = require("marked");
const fs = require("fs");
const { dialog } = require("electron").remote;
const markdownView = document.querySelector("#markdown");
const htmlView = document.querySelector("#html");
const newFileButton = document.querySelector("#new-file");
const openFileButton = document.querySelector("#open-file");
const saveMarkdownButton = document.querySelector("#save-markdown");
const revertButton = document.querySelector("#revert");
const saveHtmlButton = document.querySelector("#save-html");
const showFileButton = document.querySelector("#show-file");
const openInDefaultButton = document.querySelector("#open-in-default");

const renderMarkdownToHtml = (markdown) => {
  htmlView.innerHTML = marked(markdown, { sanitize: true });
};

markdownView.addEventListener("keyup", (event) => {
  const curentContent = event.target.value;
  renderMarkdownToHtml(curentContent);
});

// 打开选择文件窗口
// 创建getFileFromUser()函数
const getFileFromUser = () => {
  const mainWindow = require("electron").BrowserWindow;
  dialog
    .showOpenDialog(mainWindow, { properties: ["openFile"] })
    .then((res) => {
      if (res.canceled) {
        return;
      }
      const filepath = res.filePaths[0];
      const content = fs.readFileSync(filepath).toString();
      const textarea = document.getElementById("markdown");
      textarea.innerHTML = content;
    });
};

(function () {
  // 注册打开文件选择框事件
  document
    .getElementById("open-file")
    .addEventListener("click", getFileFromUser);
})();
