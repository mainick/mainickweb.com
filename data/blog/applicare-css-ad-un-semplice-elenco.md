---
title: 'Applicare CSS ad un semplice elenco'
date: '2008-11-07T07:30:25+01:00'
status: publish
permalink: /applicare-css-ad-un-semplice-elenco
author: 'Maico Orazio'
excerpt: ''
type: post
id: 202
category:
  - CSS
tag:
  - CSS
post_format: []
---

## Lista verticale

**HTML**

```html
<div id="navcontainer">
  <ul id="navlist">
    <li id="active"><a href="#" id="current">Item one</a></li>
    <li><a href="#">Item two</a></li>
    <li><a href="#">Item three</a></li>
    <li><a href="#">Item four</a></li>
    <li><a href="#">Item five</a></li>
  </ul>
</div>
```

**CSS**

```css
#navcontainer {
  width: 12em;
  border-right: 1px solid #000;
  padding: 0 0 1em 0;
  margin-bottom: 1em;
  font-family: Verdana, Lucida, Geneva, Helvetica, Arial, sans-serif;
  background-color: #90bade;
  color: #333;
}
#navcontainer ul {
  list-style: none;
  margin: 0;
  padding: 0;
  border: none;
}
#navcontainer li {
  border-bottom: 1px solid #90bade;
  margin: 0;
}
#navcontainer li a {
  display: block;
  padding: 5px 5px 5px 0.5em;
  border-left: 10px solid #1958b7;
  border-right: 10px solid #508fc4;
  background-color: #2175bc;
  color: #fff;
  text-decoration: none;
  width: 100%;
}
html > body #navcontainer li a {
  width: auto;
}
#navcontainer li a:hover {
  border-left: 10px solid #1c64d1;
  border-right: 10px solid #5ba3e0;
  background-color: #2586d7;
  color: #fff;
}
```

;

## Lista orizzontale

**HTML**

```html
<div id="navcontainer">
  <ul id="navlist">
    <li id="active"><a href="#" id="current">Item one</a></li>
    <li><a href="#">Item two</a></li>
    <li><a href="#">Item three</a></li>
    <li><a href="#">Item four</a></li>
    <li><a href="#">Item five</a></li>
  </ul>
</div>
```

**CSS**

```css
#navcontainer {
  margin: 0;
  padding: 0;
  height: 22px;
  font: 11px Verdana, sans-serif;
  width: 100%;
  border-bottom: 1px solid #bbb;
  list-style-type: none;
  background: #fff;
}
#navlist li {
  float: left;
  margin: 0;
  padding: 0;
  width: auto;
  display: block;
}
#navlist li a,
#navlist li a:link {
  background: #fff;
  color: #555;
  text-decoration: none;
  padding: 3px 5px 3px 5px;
  display: block;
}
#navlist li a:hover {
  color: #039;
  border-bottom: 3px solid #bbb;
  cursor: pointer;
  background: #eee;
}
#navlist li a#current,
#navlist li a#current:link {
  color: #000;
  cursor: default;
  font-weight: bold;
  border-bottom: 3px solid #999;
}
#navlist li a#current:hover {
  border-bottom: 3px solid #f90;
  background: #eee;
}
```
