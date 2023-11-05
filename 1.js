"use strict";

/*
###Задание 1
Создайте обычный объект "Музыкальная коллекция", который можно итерировать. 
Каждая итерация должна возвращать следующий альбом из коллекции. Коллекция 
альбомов - это массив внутри нашего объекта (создать несколько альбомов самому).
Каждый альбом имеет следующую структуру:
{
  title: "Название альбома",
  artist: "Исполнитель",
  year: "Год выпуска"
}
Используйте цикл for...of для перебора альбомов в музыкальной коллекции и 
вывода их в консоль в формате:
"Название альбома - Исполнитель (Год выпуска)"
*/

class Album {
  constructor(title, artist, year) {
    this.title = title;
    this.artist = artist;
    this.year = year;
  }

  toString() {
    return `${this.title} - ${this.artist} (${this.year})`;
  }
}

class MusicCollection {
  constructor(count) {
    this.albums = [];
    for(let i = 1, y = 2010; i <= count; i++, y++)
      this.albums.push(new Album('Альбом ' + i, 'Исполнитель ' + i, y + 1));
  }

  *[Symbol.iterator]() {
    for(let i = 0; i < this.albums.length; i++)
      yield this.albums[i];
  }
}

for(const album of new MusicCollection(9)) {
  console.log(album + '');
}
