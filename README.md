# Markdown-app (Vimnotes)
A free note taking app using vim key bindings.
Visit the site here: [Vimnotes](https://vimnotes.vercel.app/)
> Disclaimer: I am not an expert on vim, i've been using it for only a year, that's why i only included simple vim key bindings on this app

# Feature Highlights  
- [x] Vim key bindings
- [x] Keyboard shortcut for navigating 

## Todo
- [ ] Opting to normal mode and vim mode *(for mobile users)*
- [ ] Make user able to delete their account
- [ ] Changing password and email
- [x] Password recovery
- [ ] Support for desktop app *(electron and react router aren't in good terms apparently)*


## Keyboard Shortcuts

- `:w`  or  `ctrl+s` - to write/save current note
- `:q`  - to close editor and open preview (can only be triggered within editor)
- `:h` - to open up vim cheatsheet page ( `ctrl+shift+h` so you can toggle between current page and vim cheatsheet page so you can easily look up vim keybindings while using your editor for ease of access)
- `ctrl+shift+e` - to toggle sidebar  
- `ctrl+shift+f` - to toggle focus on search bar
- `ctrl+shift+p` - to toggle between preview and editor


## Reason
I've been using [Simplenote](https://simplenote.com/) for a year now and i've been loving it, but the problem is that i wanted to be able to
utilize simple vim key bindings for navigation and the godsent habit of typing `:w` to save a file while taking notes, so that's why
I built vimnotes for my own personal use.

## User data
Since this is more of a pet project than an serious one, I would like for users to not use their personal credentials for signing up,  
you can use whatever email you want even if its a trash email.

## Preview
![Screenshot from 2023-07-04 10-23-32](https://github.com/Sty6x/markdown-app/assets/53662191/b81f224a-a257-426d-91b9-cc4c6c66550d)
![Screenshot from 2023-07-04 10-21-34](https://github.com/Sty6x/markdown-app/assets/53662191/d9654f59-10f7-40d6-9625-fced57227d1b)
![Screenshot from 2023-07-04 10-16-51](https://github.com/Sty6x/markdown-app/assets/53662191/f2ad0a4f-fe6f-4e21-a7c5-405376254cc1)
![Screenshot from 2023-07-04 10-16-40](https://github.com/Sty6x/markdown-app/assets/53662191/f95b058f-92cd-49a3-b018-14e786c924a9)
![Screenshot from 2023-07-04 10-16-06](https://github.com/Sty6x/markdown-app/assets/53662191/309260ee-2153-4ab4-bba8-e37d5bc79042)

## Tools and Libraries used
[Remarkjs](https://github.com/remarkjs/react-markdown#what-is-this): a markdown library for reactjs  
[Electron](https://www.electronjs.org/): for creating a cross platform desktop application *desktop app not available yet*  
[Firebase](https://firebase.google.com/): For storing user data and user authentication  
[Codemirror](https://uiwjs.github.io/react-codemirror/): For creating an editor on the browser *with vim extension*
