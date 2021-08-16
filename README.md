# xmCockpit
 A way to show who's piloting ([Preview](https://jscanzoni.github.io/xmCockpit/))
 


## Installation

* Create a bookmarklet called `xmCockpit` with this code:
```
javascript:(function()%7Bwindow.open('https%3A%2F%2Fjscanzoni.github.io%2FxmCockpit%2F'%2C'targetWindow'%2C%0A%60toolbar%3Dno%2C%0A%20%20%20%20location%3Dno%2C%0A%20%20%20%20status%3Dno%2C%0A%20%20%20%20menubar%3Dno%2C%0A%20%20%20%20scrollbars%3Dno%2C%0A%20%20%20%20resizable%3Dno%2C%0A%20%20%20%20width%3D305%2C%0A%20%20%20%20height%3D10000%60)%3B%0Areturn%20false%3B%7D)()%3B
```



## Cloning Instructions

Follow these instructions if you choose to clone this project and want to modify the bookmarklet. If you like what you see already you don't need to worry about this at all. 

1. Clone this repository
1. Enable GitHub Pages on that repository
1. Modify the following javascript to use the url generated
1. Enter it into this [Bookmarklet Maker](https://caiorss.github.io/bookmarklet-maker/)

```javascript
window.open('https://jscanzoni.github.io/xmCockpit/','targetWindow',
`toolbar=no,
    location=no,
    status=no,
    menubar=no,
    scrollbars=no,
    resizable=no,
    width=305,
    height=10000`);
return false;
```
