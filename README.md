
# Echoza

A a open Source Music library design for people who do not want to code, or are lazy to do so. this requires you to do nearly no work and have a music library like this: 

Themes
![Defualt Theme](https://cdn.discordapp.com/attachments/1291807849701179402/1331278189019926618/image.png?ex=679108ee&is=678fb76e&hm=9e7404c433e2d5b8de92ceace5af97cb04a6d503b63371af7a3d7cce9ed505b9&)

#
## Why Choose Echoza?
![showcase](https://ibb.co/12p0Hfw)

- Over 5 Modern Designs
- Works with Mobile
- Extremely Easy to Setup (Barely Takes 5 Mins)
- Easy to switch between themes without having to resetup 
- Made with HTML, CSS and JavaScript so its easy to modify
#
## Seting up Echoza

1. **Download the ZIP file:**  
   - Extract the contents after downloading.  

2. **Choosing a Theme:**  
   - The default theme is `style.css`, located inside the `themes_css` folder.  
   - Inside this folder, you'll find multiple theme options (CSS files).  

3. **How to Change the Theme:**  
   - Open the `index.html` file.  
   - Go to **line 7**, where you'll find the following code:  

     ```html
     <link rel="stylesheet" href="themes_css/style.css">
     ```

   - To switch to a different theme, replace `style.css` with the desired theme filename.  

   **Example:**  
   If you want to use `lapis.css`, change the code to:  

   ```html
   <link rel="stylesheet" href="themes_css/lapis.css">
   ```

4. **Repeat the process** for any other theme you'd like to apply.

5. **Loading screen Site Name** go on line 16 `<h1>Welcome YourSite</h1>` replace YourSite with the name of your page



#
### Adding Custom Songs and Covers

After choosing a theme, you can add your own songs and cover images by following these steps:  

1. **Open the `songs.js` file.**  
2. **Add your songs in the following format:**  

```js
const songs = [
    {
        id: 1,
        title: "Your Song Title",
        src: "songs/your-song-file.mp3",
        cover: "coverpages/your-cover-image.jpg"
    }
];
```

### Explanation of each field:  
- **`id`** – A unique number for each song (e.g., 1, 2, 3).  
- **`title`** – The song name that will appear on the page.  
- **`src`** – The path to the MP3 file (upload songs to the `songs` folder).  
- **`cover`** – The image path for the song (upload covers to the `coverpages` folder).  

Currently, the `id` is not functional, but it will be used in future updates.  
The default `song.js` maybe look abit different since it has some examples before hand.

Simply follow this format to add more songs to your music library.

#
### Updating to the Latest Version

When updating, **never delete or replace** the `songs.js` file—this will erase your song list, and you'll have to add everything again from scratch.  

#### What to Update:  
- **New folders:** Add them as needed.  
- **`index.html`:** Replace only if required (not often).  
- **`themes_css` folder:** Usually needs to be completely replaced.  

#### Important Notes:  
- Updates are **optional**, but it's recommended to get the latest features, themes, and improvements.  
- Each update typically includes a guide (e.g., "how to update from version X to Y") to help you upgrade easily.  

Always check the update log for specific instructions to ensure a smooth update process.

![Misc](https://cdn.discordapp.com/attachments/1291807849701179402/1331358974657822802/Echoza_Misc.png?ex=6791542b&is=679002ab&hm=c184ce469a7799589dbef76b8bcf6c71a8ed588fd47f391086b28b9092f9616a&)
# TIPS & Configs
### Structure
```
Echoza
├── coverpages
│   └── coverpages.png
├── songs
│   └── mysong.mp3
├── themes_css
│   └── themes.css
├── index.html
├── songs.js
└── laoding.css
```

**Common issues you might face, such as:**

"Why isn't my song showing up?"

`Check if the source path is correct.`

"Why does my cover image not appear?" 

`Ensure the filename and extension match exactly.`

"What should I do if a theme is not applying?" 

`Verify the correct file path in index.html.`

**Tips**

- Frequently take backup of `songs.js` just incase you lose the file bymistake. 

- Use optimized image formats (e.g., JPEG instead of PNG) to reduce the size of cover images.

- If you want support we recommended you to not remove credits on loading sreen and footer.

- Customize YourSite with your name on these lines
```
line 16 
 <h1>Welcome to YourSite</h1>

line 28
 <h1>YourSite</h1>

line 42
 <p>© 2025 YourSite</p>
```
