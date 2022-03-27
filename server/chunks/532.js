"use strict";
exports.id = 532;
exports.ids = [532];
exports.modules = {

/***/ 7532:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Y": () => (/* binding */ getAllTags)
/* harmony export */ });
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7147);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8076);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1017);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mdx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6852);
/* harmony import */ var _utils_kebabCase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7836);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_mdx__WEBPACK_IMPORTED_MODULE_3__]);
_mdx__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];





const root = process.cwd();
async function getAllTags(type) {
    const files = await (0,_mdx__WEBPACK_IMPORTED_MODULE_3__/* .getFiles */ .bE)(type);
    let tagCount = {};
    // Iterate through each post, putting all found tags into `tags`
    files.forEach((file)=>{
        const source = fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(path__WEBPACK_IMPORTED_MODULE_2___default().join(root, 'data', type, file), 'utf8');
        const { data  } = gray_matter__WEBPACK_IMPORTED_MODULE_1___default()(source);
        if (data.tags && data.draft !== true) {
            data.tags.forEach((tag)=>{
                const formattedTag = (0,_utils_kebabCase__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(tag);
                if (formattedTag in tagCount) {
                    tagCount[formattedTag] += 1;
                } else {
                    tagCount[formattedTag] = 1;
                }
            });
        }
        if (data.tag && data.status === 'publish') {
            data.tag.forEach((tag)=>{
                const formattedTag = (0,_utils_kebabCase__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(tag);
                if (formattedTag in tagCount) {
                    tagCount[formattedTag] += 1;
                } else {
                    tagCount[formattedTag] = 1;
                }
            });
        }
    });
    return tagCount;
}

});

/***/ })

};
;