# Contributing
Contributions are most welcome. I hope this document useful to answer any questions around contributing to this repository.

## Before making any changes
Please open an issue to discuss new ideas or features before going away and developing them. If an idea or feature is deemed unnecessary, your pull request won't be accepted.

## Making changes
- Clone this repo and install the required node modules.
- Run `npm run build` to build this project. 
- Follow [these instructions](https://superuser.com/a/247654) to install this extension locally. Use the generated `build` folder as the folder containing the extensions code to load.
- If you only need to make cosmetic changes, run `npm run start` to load the extension as a standalone website. I find it much faster that way. In this mode, the app is using a mocked version of Chrome's storage API's.

## Merging your changes in
In other words, the pull request process. When you're ready with your changes, open up a pull request to get your changes merged in. Follow the checklist below to ensure you've covered the requirements. 

### Checklist
- Think of how you can tackle a piece of work in the smallest unit possible. A small unit, in this case, would be something that adds value even though the changes are small. Small changes are easier to review, hence the request to think small where possible.
- Ensure you've added or updated unit tests. Would your unit test fail if someone was to accidentally modify your code?
- Update the version number in the [manifest.json file](https://github.com/ClydeDz/retro-notes-chrome-extension/blob/main/public/manifest.json#L4) and [package.json file](https://github.com/ClydeDz/retro-notes-chrome-extension/blob/main/package.json#L3). We're following the [Semver guide](https://semver.org/), so please check the website to see which number you'd need to increment. 
- As a result of your changes, if you need to make changes to screenshots or description of the extension, please let me know in the description of your pull request and we can review your updated copy together. Updating this in the Chrome web store is currently a manual process.

**Note:** Even after a successful build and deployment, the extension still remains in draft/unpublished state in the Chrome developer site. I need to manually submit a version for review which then eventually published the extension.

Thanks!