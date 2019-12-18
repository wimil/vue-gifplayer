#vue-gifplayer
Facebook preview and gif loader - gif player

###demo
![a gif of gif loaded using vue-gifplayer](http://g.recordit.co/HVGXv0w3nt.gif)

### Install

```bash
npm i vue-playergif -s
```

### Usage

```html
<gif-player
  src="https://media0.giphy.com/media/l0MYJnJQ4EiYLxvQ4/giphy.mp4"
></gif-player>
```


### Props

**src** 
url of the gif file in mp4

**still**
URL for an image preview of your Gif. (can be any image, but width should be the same a gif)

**width**
gif width

**height**
height gif

**autoplay**
the gif plays automatically

**loop**
the gif plays indefinitely

**type** ```default: video```
for now it only accepts video format (video/mp4)


**by**
```
Object:
{
    name: 'Giphy',
    url: 'https://giphy.com/gifs/l0MYJnJQ4EiYLxvQ4'
}
```
information about the gif provider

**showGif** ```Default: true```
show or hide gif provider
