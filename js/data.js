import {getRandomPositiveInteger, getRandomArrayElement} from './util.js';

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const DESCRIPTIONS = [
  'Шикарное фото!',
  'Море',
  'Котяра',
  'Моя гонка',
  'Лучший день!',
];

const NAMES = [
  'Александр',
  'Андрей',
  'Анна',
  'Анжелика',
  'Арина',
  'Августина',
  'Амелия',
  'Виктор',
  'Виолетта',
  'Валерий',
  'Всеволод',
  'Виталий',
  'Геннадий',
  'Дмитрий',
  'Денис',
  'Егор',
  'Жанна',
  'Зигмунд',
  'Игорь',
  'Ираклий',
  'Катерина',
  'Кира',
  'Константин',
  'Лера',
  'Лиза',
];

const createComment = () => ({
  id: getRandomPositiveInteger (0,500),
  avatar: `img/avatar-${ getRandomPositiveInteger (1,6) }.svg`,
  message: getRandomArrayElement (MESSAGES) ,
  name: getRandomArrayElement (NAMES),
});

const createPhoto = () => ({
  id: getRandomPositiveInteger (1,25),
  url: `photos/${getRandomPositiveInteger (1,25)}.jpg`,
  description: getRandomArrayElement (DESCRIPTIONS) ,
  likes: getRandomPositiveInteger (15,200),
  comments: Array.from({length:getRandomPositiveInteger(1, 10)}, createComment),
});

//Функция возвращающая массив объектов;
const createPhotoAlbum = () => Array.from({length:25}, createPhoto);

export {createPhotoAlbum};
