# React-Facebook-Video-Downloader

### The functionality to download videos is not applied because in addition to the available packages not working, facebook does not allow you to download your videos without the permission of the creator of the post. So it was like a simulation.

---

### Project use cases:

The app has an input for the user to enter a URL, from which the app "comes alive". After the user enters a text, a clean button appears for him to remove all the text, the button only appears while there is text in the input.

There is no submit link button, instead there is a progress bar that resets whenever the user types some text (excluding only blank spaces, with .trim()). This logic was made thinking of creating an intelligent input, keeping a timer to avoid immediate requests every time a user types something.

After the progress bar reaches 100%, a screen with the "result" of the past url is shown below (remembering that it is a simulation). The result shows the video's thumb, title, description and download options, simulating a real download page.

### Programming context:

The main objective of this project was to train with React hooks: **useState, useEffect, useContext** were used a lot in the project.

**useState** were essential to maintain and update the states used for different situations: Modifying the entered URL, flags used to handle the progress bar, enabling visual effects, etc..

**useEffect** It was mainly used in App.js to handle progress bar changes, show the clear button effect when modifying typed url, wait time when typing, etc.

The **useContext** wouldn't really be necessary, but it was quite useful for keeping flags of when the user is typing and the current URL, this helped to use it in different ways in the components without the need to pass as props between them.

The program is responsive, thanks to the adoption of FlexBox.
