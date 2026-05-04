"use strict";

const lessons = [
  {
    kana: "あ",
    word: "あめ",
    picture: "☔",
    strokes: [
      { label: "1かくめ", pathD: "M31.01,33c0.88,0.88,2.75,1.82,5.25,1.75c8.62-0.25,20-2.12,29.5-4.25c1.51-0.34,4.62-0.88,6.62-0.5", points: [[31.01, 33], [72.38, 30]], guideWidth: 8.5, minLength: 0.17 },
      { label: "2かくめ", pathD: "M49.76,17.62c0.88,1,1.82,3.26,1.38,5.25c-3.75,16.75-6.25,38.13-5.13,53.63c0.41,5.7,1.88,10.88,3.38,13.62", points: [[49.76, 17.62], [49.39, 90.12]], guideWidth: 8.5, minLength: 0.3 },
      { label: "3かくめ", pathD: "M65.63,44.12c0.75,1.12,1.16,4.39,0.5,6.12c-4.62,12.26-11.24,23.76-25.37,35.76c-6.86,5.83-15.88,3.75-16.25-8.38c-0.34-10.87,13.38-23.12,32.38-26.74c12.42-2.37,27,1.38,30.5,12.75c4.05,13.18-3.76,26.37-20.88,30.49", points: [[65.63, 44.12], [66.51, 94.12]], guideWidth: 8.5, minLength: 0.21, checkDirection: false }
    ]
  },
  {
    kana: "い",
    word: "いえ",
    picture: "🏠",
    strokes: [
      { label: "1かくめ", pathD: "M21.5,29.66c2.01,2.17,2.61,4.68,2.17,7.43c-3.09,19.16-1.03,32.01,7.93,41.45c6.12,6.45,6.26,3.14,7.04-5.21", points: [[21.5, 29.66], [38.64, 73.33]], guideWidth: 8.5, minLength: 0.19 },
      { label: "2かくめ", pathD: "M72.96,36.51c9.44,8.05,17.79,18.82,18.41,33.83", points: [[72.96, 36.51], [91.37, 70.34]], guideWidth: 8.5, minLength: 0.16 }
    ]
  },
  {
    kana: "う",
    word: "うま",
    picture: "🐴",
    strokes: [
      { label: "1かくめ", pathD: "M42,15.5c5.62,2.12,9.62,3,12.88,3c8.27,0,8,1.12-0.38,5.5", points: [[42, 15.5], [54.5, 24]], guideWidth: 8.5, minLength: 0.06, checkDirection: false },
      { label: "2かくめ", pathD: "M33,42.38c2.12,1.12,4.12,2.88,8.5,1.38c4.38-1.5,12.75-7.12,18.5-7c5.75,0.12,10.25,5,10.25,18c0,15.49-8.25,30.24-24.37,41.24", points: [[33, 42.38], [45.88, 96]], guideWidth: 8.5, minLength: 0.23 }
    ]
  },
  {
    kana: "え",
    word: "えんぴつ",
    picture: "✏️",
    strokes: [
      { label: "1かくめ", pathD: "M40.52,13.25c5.62,2.12,10,3,14.12,3c8.27,0,8,1.12-0.38,5.5", points: [[40.52, 13.25], [54.26, 21.75]], guideWidth: 8.5, minLength: 0.07, checkDirection: false },
      { label: "2かくめ", pathD: "M32.52,45.12c1.88,1.25,4.5,1.75,7.38,0.62c3.29-1.29,17-7.88,21.25-9.88c4.25-2,8.32,0.04,4.38,4.62c-12.26,14.27-27.26,31.52-39.51,44.4c-3.26,3.42-0.58,3.54,1.5,1.37c13.5-14.12,18.12-20.12,23.62-20.12c7.13,0,3.5,16.75,6.75,22.38c3.25,5.63,19.12,3.75,26.12,2.12", points: [[32.52, 45.12], [84.01, 90.63]], guideWidth: 8.5, minLength: 0.28 }
    ]
  },
  {
    kana: "お",
    word: "おにぎり",
    picture: "🍙",
    strokes: [
      { label: "1かくめ", pathD: "M22.88,35.12c1.38,1,3.62,2.38,6,2.12c2.38-0.26,19.62-5.12,21.12-5.74c1.5-0.62,4-1.25,5.88-2", points: [[22.88, 35.12], [55.88, 29.5]], guideWidth: 8.5, minLength: 0.14 },
      { label: "2かくめ", pathD: "M41.5,16.12c2.25,1,3.59,4.39,3.12,7.38c-2.5,16.12-3.37,45.53-2.25,58.38c0.75,8.62-0.64,10.45-7.12,7.12c-5.13-2.62-13.75-8-13.75-12.38c0-7.5,24.38-23.62,44.75-23.62c17.25,0,25,8.25,25,17.25c0,8.25-9.38,18.88-26.75,21", points: [[41.5, 16.12], [64.5, 91.25]], guideWidth: 8.5, minLength: 0.32 },
      { label: "3かくめ", pathD: "M73,22.12c5.38,2.62,8.88,5.88,10.62,8.25c2.27,3.08,0.38,4.5-1.12,5", points: [[73, 22.12], [82.5, 35.37]], guideWidth: 8.5, minLength: 0.07, checkDirection: false }
    ]
  },
  {
    kana: "か",
    word: "かさ",
    picture: "☂️",
    strokes: [
      { label: "1かくめ", pathD: "M24.62,38.62c1.88,1.62,4.65,2.33,8.62,1c25.5-8.5,29.5-4.13,29.5,7.62c0,9.38-1.24,17.46-4.25,25.25c-7.62,19.76-10.87,17.39-16.12,10.89", points: [[24.62, 38.62], [42.37, 83.38]], guideWidth: 8.5, minLength: 0.2 },
      { label: "2かくめ", pathD: "M48.5,17.5c1,1.38,1.29,4.7,0.5,7.12c-5,15.25-18.02,40.93-19.62,43.88c-3.12,5.75-6.38,11.88-9.38,16.25", points: [[48.5, 17.5], [20, 84.75]], guideWidth: 8.5, minLength: 0.3 },
      { label: "3かくめ", pathD: "M77.37,31.62c7.5,6.88,13.25,15.75,15,24.88", points: [[77.37, 31.62], [92.37, 56.5]], guideWidth: 8.5, minLength: 0.12, checkDirection: false }
    ]
  },
  {
    kana: "き",
    word: "きつね",
    picture: "🦊",
    strokes: [
      { label: "1かくめ", pathD: "M30.5,30.25c1.88,0.75,4.64,1.06,5.88,0.88c6.75-1,22.25-4.5,26.5-6c2.17-0.76,3.5-1.25,4.88-2.12", points: [[30.5, 30.25], [67.76, 23.01]], guideWidth: 8.5, minLength: 0.16 },
      { label: "2かくめ", pathD: "M36.25,48.7c2.01,0.85,4.97,1.2,6.29,0.99c7.23-1.13,23.82-5.09,28.37-6.79c2.32-0.86,3.75-1.41,5.22-2.4", points: [[36.25, 48.7], [76.13, 40.5]], guideWidth: 8.5, minLength: 0.17 },
      { label: "3かくめ", pathD: "M42,14.12c1.5,0.88,3.13,2.94,4,5.12c5.5,13.76,16,29.26,26.37,40.76c7.64,8.47,9.12,9.38-6,3.88", points: [[42, 14.12], [66.37, 63.88]], guideWidth: 8.5, minLength: 0.23, checkDirection: false },
      { label: "4かくめ", pathD: "M33.75,83.25c10.62,9.75,27.25,8.62,38.12,5", points: [[33.75, 83.25], [71.87, 88.25]], guideWidth: 8.5, minLength: 0.16, checkDirection: false }
    ]
  },
  {
    kana: "く",
    word: "くるま",
    picture: "🚗",
    strokes: [
      { label: "1かくめ", pathD: "M60.66,15c0.5,1.62,0.35,5.44-1,7.38c-6.75,9.62-14.3,19.08-18.62,24.5c-4,5-3.79,7.03-0.88,11c5.5,7.5,12.75,18.75,17.62,27.25c1.48,2.59,2.75,4.75,4.5,8.62", points: [[60.66, 15], [62.28, 93.75]], guideWidth: 8.5, minLength: 0.33 }
    ]
  },
  {
    kana: "け",
    word: "けむし",
    picture: "🐛",
    strokes: [
      { label: "1かくめ", pathD: "M24.67,19.75c1.25,1.5,2.62,3.75,2.12,6.38c-3,15.88-6.5,29.5-4.88,44.62c2.02,18.84,2.25,4.75,6.75-3.5", points: [[24.67, 19.75], [28.66, 67.25]], guideWidth: 8.5, minLength: 0.2 },
      { label: "2かくめ", pathD: "M53.67,38.62c2.12,1.38,4.28,1.89,6.88,1.5c8.25-1.25,15.39-2.57,20.62-4c2.76-0.74,5.26-1.12,6.88-1.12", points: [[53.67, 38.62], [88.05, 35]], guideWidth: 8.5, minLength: 0.14 },
      { label: "3かくめ", pathD: "M71.67,14.38c2.13,1.37,2.88,3.35,2.88,5.12c0,11.62,0.12,20.38,0.12,30.12c0,20.75-0.62,30.88-12.5,42.25", points: [[71.67, 14.38], [62.17, 91.87]], guideWidth: 8.5, minLength: 0.32, checkDirection: false }
    ]
  },
  {
    kana: "こ",
    word: "こい",
    picture: "🎏",
    strokes: [
      { label: "1かくめ", pathD: "M34.75,26.75c1.12,0.88,2.91,2.01,6,1.5c7.62-1.25,14.11-2.56,22.38-2.62c15.5-0.12,5.88,5-5.75,9", points: [[34.75, 26.75], [57.38, 34.63]], guideWidth: 8.5, minLength: 0.1 },
      { label: "2かくめ", pathD: "M30,68.12c2.25,14.5,15.26,17.96,31,16.75c6.5-0.5,11.88-1.25,17.62-2.88", points: [[30, 68.12], [78.62, 81.99]], guideWidth: 8.5, minLength: 0.21 }
    ]
  },
  {
    kana: "さ",
    word: "さかな",
    picture: "🐟",
    strokes: [
      { label: "1かくめ", pathD: "M27,38.9c2.42,1.33,5.38,1.47,8.32,1.06c8.79-1.24,28.67-7.76,34.15-10.43c2.79-1.36,3.78-1.91,6.28-3.53", points: [[27, 38.9], [75.75, 26]], guideWidth: 8.5, minLength: 0.21 },
      { label: "2かくめ", pathD: "M41.5,13.88c1.5,0.88,3.63,2.94,4.5,5.12c5.5,13.75,15.25,27.62,26.87,39.5c7.98,8.15,6.38,10-6,3.12", points: [[41.5, 13.88], [66.87, 61.62]], guideWidth: 8.5, minLength: 0.22 },
      { label: "3かくめ", pathD: "M35.25,80.5c4.5,11.75,20.88,12.5,38.38,7.5", points: [[35.25, 80.5], [73.63, 88]], guideWidth: 8.5, minLength: 0.16, checkDirection: false }
    ]
  },
  {
    kana: "し",
    word: "しまうま",
    picture: "🦓",
    strokes: [
      { label: "1かくめ", pathD: "M39.12,17.5c1.25,3.12,0.93,6.74,0.38,10.25c-2.12,13.5-3,26.5-3,39.12c0,27.38,19.88,30.12,45.5,17.25", points: [[39.12, 17.5], [82, 84.12]], guideWidth: 8.5, minLength: 0.33 }
    ]
  },
  {
    kana: "す",
    word: "すいか",
    picture: "🍉",
    strokes: [
      { label: "1かくめ", pathD: "M15.5,37.12c2.88,2.12,6.94,1.51,12.75,0.25c16.12-3.5,36.14-5.38,46.62-6.5c7-0.75,11.88-0.62,17.75,0.12", points: [[15.5, 37.12], [92.62, 30.99]], guideWidth: 8.5, minLength: 0.32 },
      { label: "2かくめ", pathD: "M57.62,13.38c2,1.5,2.75,3.25,2.75,5.88c0,10.38,0,35.12,0,40.75c0,14.62-15.62,16.38-15.62,1.75c0-14.25,18-14.12,18,6.38c0,13.25-7.75,21.5-16,28.38", points: [[57.62, 13.38], [46.75, 96.52]], guideWidth: 8.5, minLength: 0.35 }
    ]
  },
  {
    kana: "せ",
    word: "せんせい",
    picture: "👩‍🏫",
    strokes: [
      { label: "1かくめ", pathD: "M16.5,49.93c2.88,2.42,6.86,1.57,12.75,0.53c19-3.34,33-5.72,47.12-7.64c6.99-0.95,11.88-1.21,17.75-0.36", points: [[16.5, 49.93], [94.12, 42.46]], guideWidth: 8.5, minLength: 0.32 },
      { label: "2かくめ", pathD: "M69.74,17.75c2,1.5,2.75,3.25,2.75,5.88c0,10.38,0,17.88,0,23.5c0,25.62-5.75,23.25-11.88,19", points: [[69.74, 17.75], [60.61, 66.13]], guideWidth: 8.5, minLength: 0.2 },
      { label: "3かくめ", pathD: "M35.62,26.25c2,1.5,2.75,3.25,2.75,5.88c0,10.38,0,28.38,0,34c0,14.5,6.38,19.55,20.14,19.55c10.24,0,13.74,0.07,22.61-1.68", points: [[35.62, 26.25], [81.12, 84]], guideWidth: 8.5, minLength: 0.3, checkDirection: false }
    ]
  },
  {
    kana: "そ",
    word: "そり",
    picture: "🛷",
    strokes: [
      { label: "1かくめ", pathD: "M38.4,22c1.88,1.25,4.98,1.05,7.5,0.38c6.5-1.75,13.25-3.75,19.38-5.38c4.63-1.23,7.18,2.06,3.62,5.25c-12.12,10.87-31.14,24.4-40,30.25c-6.25,4.12-5.88,5.75,1.38,3.88c17.08-4.42,35.96-8.68,50.12-10.38c9.38-1.12,9.62,0.12,0.5,1.38c-15.82,2.17-34.38,14.25-34.38,26.5c0,12.88,11.62,20.38,31.5,16.62", points: [[38.4, 22], [78.02, 90.5]], guideWidth: 8.5, minLength: 0.33 }
    ]
  },
  {
    kana: "た",
    word: "たこ",
    picture: "🐙",
    strokes: [
      { label: "1かくめ", pathD: "M24.38,35.38c1.38,0.62,3.88,1.51,6.38,1.12c6.5-1,16.25-2.88,24.88-4.75c2.64-0.57,5.38-1.5,7.62-2.38", points: [[24.38, 35.38], [63.26, 29.37]], guideWidth: 8.5, minLength: 0.16 },
      { label: "2かくめ", pathD: "M45,16.88c0.75,1.25,0.87,3.62,0.38,5.25c-6.35,20.94-12.75,36.37-18.88,52.37c-1.36,3.56-4.75,11.75-6,14.62", points: [[45, 16.88], [20.5, 89.12]], guideWidth: 8.5, minLength: 0.31 },
      { label: "3かくめ", pathD: "M56.38,53.25c12.38-2.75,18.25-3.7,23.62-3.12c15.12,1.62-1.12,2.25-4.25,4.88", points: [[56.38, 53.25], [75.75, 55.01]], guideWidth: 8.5, minLength: 0.08, checkDirection: false },
      { label: "4かくめ", pathD: "M54.13,82.25c4.38,7,14.25,8.12,34.5,5.62", points: [[54.13, 82.25], [88.63, 87.87]], guideWidth: 8.5, minLength: 0.14, checkDirection: false }
    ]
  },
  {
    kana: "ち",
    word: "ちず",
    picture: "🗺️",
    strokes: [
      { label: "1かくめ", pathD: "M24.5,32.62c1.38,0.62,3.88,1.51,6.38,1.12c6.5-1,18.25-4.12,26.88-6c2.64-0.57,5.38-1.5,7.62-2.38", points: [[24.5, 32.62], [65.38, 25.36]], guideWidth: 8.5, minLength: 0.17 },
      { label: "2かくめ", pathD: "M45.62,15.62c0.75,1.25,0.71,3.58,0.38,5.25c-3,15-4.25,22.59-8.38,38.62c-3.25,12.62-5.38,11.12,3.62,4.38c8.29-6.21,19.75-9.5,28.5-9.5c8.62,0,14.58,5.88,14.5,14.5c-0.12,13.5-16.5,20.62-29.88,23.25", points: [[45.62, 15.62], [54.36, 92.12]], guideWidth: 8.5, minLength: 0.32 }
    ]
  },
  {
    kana: "つ",
    word: "つき",
    picture: "🌙",
    strokes: [
      { label: "1かくめ", pathD: "M14,44.75c1.88,1.62,4.68,2.09,8.12,0.62c17.88-7.62,30-11.12,44.88-10.88c12.56,0.21,22.98,7.17,22.87,19.17c-0.18,18.77-24.75,28.71-45.01,32.08", points: [[14, 44.75], [44.86, 85.74]], guideWidth: 8.5, minLength: 0.21 }
    ]
  },
  {
    kana: "て",
    word: "てぶくろ",
    picture: "🧤",
    strokes: [
      { label: "1かくめ", pathD: "M20.5,26.38c1.87,1.62,4.42,1.97,8.12,1.37c21.75-3.5,33-5.12,50.12-8.38c12.34-2.34,13-0.88,0.38,1.38c-17.89,3.19-33.78,19.12-33.78,37.62c0,20.5,17.91,30.25,35.16,30.25", points: [[20.5, 26.38], [80.5, 88.62]], guideWidth: 8.5, minLength: 0.36 }
    ]
  },
  {
    kana: "と",
    word: "とけい",
    picture: "🕒",
    strokes: [
      { label: "1かくめ", pathD: "M35.5,18.38c1.74,0.74,3.62,2.62,4.12,5.37c0.5,2.75,4.75,25,5.38,28.12", points: [[35.5, 18.38], [45, 51.87]], guideWidth: 8.5, minLength: 0.14 },
      { label: "2かくめ", pathD: "M78.12,25.5c0.25,1.88,0.04,4.09-2.25,5.75c-6.37,4.63-13.22,8.49-22.75,15.25c-12.88,9.12-21.62,18.38-21.62,27.5c0,10.12,8.5,13.88,26.88,13.88c6.25,0,14.75-0.12,21.62-1.25", points: [[78.12, 25.5], [80, 86.63]], guideWidth: 8.5, minLength: 0.25 }
    ]
  },
  {
    kana: "な",
    word: "なす",
    picture: "🍆",
    strokes: [
      { label: "1かくめ", pathD: "M22.88,28.96c1.18,0.58,3.3,1.1,5.47,1.05c5.53-0.13,10.9-0.98,16.52-2.42c4.82-1.23,9.13-3.12,11.38-4.22", points: [[22.88, 28.96], [56.25, 23.37]], guideWidth: 8.5, minLength: 0.14 },
      { label: "2かくめ", pathD: "M42.99,14c0.63,0.89,0.56,2.52,0.31,3.72c-2.96,14.16-7.95,26.56-14.25,37.87c-2.05,3.69-4.25,7.24-6.55,10.65", points: [[42.99, 14], [22.5, 66.24]], guideWidth: 8.5, minLength: 0.23 },
      { label: "3かくめ", pathD: "M72.26,23.25c6.88,2.5,12.62,5.62,14.75,9.5c4.06,7.41-0.25,3.38-3.5,3.88", points: [[72.26, 23.25], [83.51, 36.63]], guideWidth: 8.5, minLength: 0.07, checkDirection: false },
      { label: "4かくめ", pathD: "M68.88,44.62c-1,1.88-2.14,5.24-1.88,8.25c0.62,7,1.5,13.12,1.5,20.62c0,20-27.88,19.75-27.88,9.38c0-5.62,8.25-8.25,13.88-8.25c8.75,0,21.5,3.25,29.75,11.5", points: [[68.88, 44.62], [84.25, 86.12]], guideWidth: 8.5, minLength: 0.18, checkDirection: false }
    ]
  },
  {
    kana: "に",
    word: "にんじん",
    picture: "🥕",
    strokes: [
      { label: "1かくめ", pathD: "M24.53,22.75c1.25,1.5,1.62,3.75,1.12,6.38c-3,15.88-9,32.5-7.38,47.62c2.02,18.84,4.5,5.75,8.5-3.5", points: [[24.53, 22.75], [26.77, 73.25]], guideWidth: 8.5, minLength: 0.21 },
      { label: "2かくめ", pathD: "M53.2,30.64c0.96,0.79,2.44,1.58,5.1,1.35c6.98-0.61,15.01-3.3,22.04-3.36c13.19-0.11,1.5,3.75-8.39,7.35", points: [[53.2, 30.64], [71.95, 35.98]], guideWidth: 8.5, minLength: 0.08, checkDirection: false },
      { label: "3かくめ", pathD: "M52.53,68c1.76,12.92,11.92,16.01,24.23,14.93c5.08-0.45,8.9-0.8,14.27-2.06", points: [[52.53, 68], [91.03, 80.87]], guideWidth: 8.5, minLength: 0.17, checkDirection: false }
    ]
  },
  {
    kana: "ぬ",
    word: "ぬいぐるみ",
    picture: "🧸",
    strokes: [
      { label: "1かくめ", pathD: "M25.38,28.5c2,1.38,2.97,3.23,3.38,5.88c1.87,12.18,4.12,23.92,8.54,34.67c1.79,4.36,3.96,8.33,6.84,12.46", points: [[25.38, 28.5], [44.14, 81.51]], guideWidth: 8.5, minLength: 0.23 },
      { label: "2かくめ", pathD: "M57.12,19.25c0.88,2.12,1.06,3.79,0.62,5.88c-3.12,15-13.14,39.81-18.12,48.62c-11.87,21-20.62,1.25-20.62-4.5c0-22.63,43.75-44.25,62.36-29.59c7.66,6.03,9.8,14.58,9.14,23.34c-2,26.75-32.88,28.38-32.88,16.88c0-9.38,17.38-7.12,27.12-1.12c3.1,1.91,7.25,5.25,9.5,7.5", points: [[57.12, 19.25], [94.24, 86.26]], guideWidth: 8.5, minLength: 0.32 }
    ]
  },
  {
    kana: "ね",
    word: "ねこ",
    picture: "🐱",
    strokes: [
      { label: "1かくめ", pathD: "M33.29,14.5c1.62,1.62,2.1,3.21,1.88,5.88c-1.03,11.93-2.06,31.66-2.53,53.12c-0.1,4.62-0.18,9.31-0.22,14", points: [[33.29, 14.5], [32.42, 87.5]], guideWidth: 8.5, minLength: 0.3 },
      { label: "2かくめ", pathD: "M17.16,37.88c1.62,0.88,3.25,1.38,5.62,0.75c2.14-0.56,7.8-2.31,12.37-4.03c6.26-2.35,6.88-1.47,3.12,3.63c-5.56,7.53-13.02,17.38-18.48,26.77c-5.6,9.62-3.45,8.3,2,3c19.12-18.62,38.5-39.12,54.12-39.12c11.38,0,12.88,11.25,12.88,32.5c0,28.62-30.18,24.88-30.18,16.26c0-9.63,18.73-7.82,28.06-1.88c2.75,1.75,5.88,4.88,7.5,6.75", points: [[17.16, 37.88], [94.17, 82.51]], guideWidth: 8.5, minLength: 0.36 }
    ]
  },
  {
    kana: "の",
    word: "のこぎり",
    picture: "🪚",
    strokes: [
      { label: "1かくめ", pathD: "M53.82,28.62c1,1.5,1.34,4.12,0.88,6.62c-1.75,9.5-6.89,25-10.75,33.12c-9.63,20.26-16.55,14.74-24.38-1.98c-9.13-19.5,23.5-48.88,50.63-40.38c32.38,10.15,28,54.62-4.75,60.88", points: [[53.82, 28.62], [65.45, 86.88]], guideWidth: 8.5, minLength: 0.25 }
    ]
  },
  {
    kana: "は",
    word: "はな",
    picture: "🌸",
    strokes: [
      { label: "1かくめ", pathD: "M24.51,18c1.25,1.5,2.15,4,1.62,6.62c-3.5,17.62-6.98,36.4-4,54.88c2.5,15.5,1.12,2,5.62-6.25", points: [[24.51, 18], [27.75, 73.25]], guideWidth: 8.5, minLength: 0.23 },
      { label: "2かくめ", pathD: "M49.64,37.89c2.41,1.57,4.85,2.16,7.8,1.71c9.36-1.43,17.46-2.94,23.4-4.57c3.12-0.86,5.96-1.29,7.8-1.29", points: [[49.64, 37.89], [88.64, 33.74]], guideWidth: 8.5, minLength: 0.16 },
      { label: "3かくめ", pathD: "M69.77,16.5c2.25,2.12,2.88,4.12,2.88,6.5c0,2.38,1.5,38.62,1.5,48c0,22.5-30.62,19.62-30.62,10.5c0-9.75,23.88-5.62,29.5-2.88c5.62,2.74,11.98,8.26,13.36,9.38", points: [[69.77, 16.5], [86.39, 88]], guideWidth: 8.5, minLength: 0.3, checkDirection: false }
    ]
  },
  {
    kana: "ひ",
    word: "ひこうき",
    picture: "✈️",
    strokes: [
      { label: "1かくめ", pathD: "M20,25.12c1.25,0.88,3.75,2.25,6.5,1.38c2.75-0.87,7.31-2.38,11.38-4.5c6-3.12,8.42-1.01,4.25,4c-27.13,32.62-23.76,58.5-1.52,62.88c18.07,3.56,37.63-16.38,35.63-56.51c-0.72-14.5-0.17-14.78,4.12-1.75c3.76,11.38,10.26,20.76,16.14,26.5", points: [[20, 25.12], [96.5, 57.12]], guideWidth: 8.5, minLength: 0.34 }
    ]
  },
  {
    kana: "ふ",
    word: "ふね",
    picture: "🚢",
    strokes: [
      { label: "1かくめ", pathD: "M42.63,15.62c3.62,3.38,7.5,5.38,12.74,6.13c9.59,1.37,3.5,3.38-1.88,6.12", points: [[42.63, 15.62], [53.49, 27.87]], guideWidth: 8.5, minLength: 0.07, checkDirection: false },
      { label: "2かくめ", pathD: "M43.63,46.88c1.88,4.62,7.5,9.41,14.25,17.5c10.62,12.74,0.49,30-19.13,21.62", points: [[43.63, 46.88], [38.75, 86]], guideWidth: 8.5, minLength: 0.16 },
      { label: "3かくめ", pathD: "M16.5,73.38c0.75,4,1.88,8.12,5,10.12c1.16,0.74,0.12-3.38,13.25-9.12", points: [[16.5, 73.38], [34.75, 74.38]], guideWidth: 8.5, minLength: 0.08, checkDirection: false },
      { label: "4かくめ", pathD: "M80.13,61.88c5.12,3.38,10.28,7.49,11.38,8.88c6.75,8.5-0.25,4.62-4.62,7.12", points: [[80.13, 61.88], [86.89, 77.88]], guideWidth: 8.5, minLength: 0.07, checkDirection: false }
    ]
  },
  {
    kana: "へ",
    word: "へび",
    picture: "🐍",
    strokes: [
      { label: "1かくめ", pathD: "M15,48.75c2.25,1.62,4.67,1.96,7-0.38c3.62-3.62,7.46-6.54,11.25-10.5c5.5-5.75,8.48-4.75,13.12-0.88c12.12,10.12,30.38,25.12,33.38,27.38c3,2.26,12.37,10.38,13.87,11.63", points: [[15, 48.75], [93.62, 76]], guideWidth: 8.5, minLength: 0.34 }
    ]
  },
  {
    kana: "ほ",
    word: "ほし",
    picture: "⭐",
    strokes: [
      { label: "1かくめ", pathD: "M24.51,18.75c1.25,1.5,2.15,4,1.62,6.62c-3.5,17.63-6.98,37.4-4,55.88c2.5,15.5,1.12,2,5.62-6.25", points: [[24.51, 18.75], [27.75, 75]], guideWidth: 8.5, minLength: 0.23 },
      { label: "2かくめ", pathD: "M53.08,21.13c1.9,1.28,3.82,1.76,6.14,1.4c7.36-1.17,13.73-2.4,18.41-3.73c2.46-0.7,4.69-1.05,6.13-1.05", points: [[53.08, 21.13], [83.76, 17.75]], guideWidth: 8.5, minLength: 0.13 },
      { label: "3かくめ", pathD: "M53.83,44.3c2.21,1.44,4.46,1.98,7.16,1.57c8.59-1.31,15.78-2.44,21.23-3.94c2.87-0.79,5.72-1.18,7.41-1.18", points: [[53.83, 44.3], [89.63, 40.75]], guideWidth: 8.5, minLength: 0.15, checkDirection: false },
      { label: "4かくめ", pathD: "M72.51,23c1.38,1.62,1.62,4.12,1.62,6.5c0,2.38,2,35.12,2,44.5c0,17.5-29.88,17.12-29.88,8c0-9.75,21.38-7.88,29.5-2.88c5.33,3.28,12,8.25,13.38,9.38", points: [[72.51, 23], [89.13, 88.5]], guideWidth: 8.5, minLength: 0.28, checkDirection: false }
    ]
  },
  {
    kana: "ま",
    word: "まめ",
    picture: "🫘",
    strokes: [
      { label: "1かくめ", pathD: "M29.83,32.28c2.2,1.15,4.43,1.5,7.14,1.26c11.54-1.04,25.94-3.12,34.66-4.85c2.87-0.57,5.45-0.44,7.13-0.44", points: [[29.83, 32.28], [78.76, 28.25]], guideWidth: 8.5, minLength: 0.2 },
      { label: "2かくめ", pathD: "M33.83,51.84c2.45,1.61,4.94,1.72,7.94,1.26c9.52-1.46,17.87-3.1,27.03-5.16c3.22-0.72,6.34-1.32,8.21-1.32", points: [[33.83, 51.84], [77.01, 46.62]], guideWidth: 8.5, minLength: 0.18 },
      { label: "3かくめ", pathD: "M55.81,14c1.52,1.8,1.8,4.57,1.8,7.19c0,2.63,0.46,43.88,0.46,54.25c0,21.3-30.07,19.96-30.07,9.86c0-10.79,25.88-9.93,38.57-3.18c6.12,3.25,11.55,6.38,14.8,9.13", points: [[55.81, 14], [81.37, 91.25]], guideWidth: 8.5, minLength: 0.34, checkDirection: false }
    ]
  },
  {
    kana: "み",
    word: "みかん",
    picture: "🍊",
    strokes: [
      { label: "1かくめ", pathD: "M32.5,26c1.88,1.75,4.06,1.7,6.88,1.25c3.88-0.62,7.62-1.75,11.88-3.12c4.26-1.37,6.25-0.12,4.5,5.12c-1.75,5.24-6.66,17.39-12,30.12c-13.63,32.51-29.26,29.26-29.26,18.63c0-14.25,20.48-15.36,33-13.5c18.5,2.75,30,6.62,44.38,14.25", points: [[32.5, 26], [91.88, 78.75]], guideWidth: 8.5, minLength: 0.33 },
      { label: "2かくめ", pathD: "M79.38,54.75c0.75,2.38,0.49,4.37,0,6.25c-2.12,8.12-7.5,25-22.12,33.75", points: [[79.38, 54.75], [57.26, 94.75]], guideWidth: 8.5, minLength: 0.19 }
    ]
  },
  {
    kana: "む",
    word: "むし",
    picture: "🐞",
    strokes: [
      { label: "1かくめ", pathD: "M19.59,31.65c2.1,1.55,4.24,1.66,6.81,1.21c8.17-1.41,15.33-2.98,23.19-4.96c2.76-0.69,5.44-1.27,7.05-1.27", points: [[19.59, 31.65], [56.64, 26.63]], guideWidth: 8.5, minLength: 0.15 },
      { label: "2かくめ", pathD: "M37.02,15.5c1.62,1.25,2.31,2.88,2.12,5.25c-0.88,11.12-1.5,20.75-4,34.88c-3.61,20.44-19.25,16.99-18.62,7.37c0.5-7.74,6.25-12.86,12.62-13.5c5-0.5,14.28,1.93,5.88,15c-12.62,19.62-11.42,24.51,5.11,25.54c10.98,0.68,19.26,0.72,28.49-0.92c14.15-2.5,7.4-2.63,7.4-11.13", points: [[37.02, 15.5], [76.02, 77.99]], guideWidth: 8.5, minLength: 0.3 },
      { label: "3かくめ", pathD: "M78.52,36.25c6.88,3.12,11.71,5.95,14.88,10.12c6.25,8.25-1.38,3.62-4.5,4.5", points: [[78.52, 36.25], [88.9, 50.87]], guideWidth: 8.5, minLength: 0.07, checkDirection: false }
    ]
  },
  {
    kana: "め",
    word: "めがね",
    picture: "👓",
    strokes: [
      { label: "1かくめ", pathD: "M27.48,31.75c1.75,1,2.41,3.09,2.5,5.25c0.5,11.62,2.75,23.5,7.25,31.38c1.39,2.44,5.38,8.5,7.25,10.38", points: [[27.48, 31.75], [44.48, 78.76]], guideWidth: 8.5, minLength: 0.21 },
      { label: "2かくめ", pathD: "M59.6,19.38c1,1.5,1.35,4.12,0.88,6.62c-2.75,14.62-13.62,37.75-20.1,47.24c-12.28,17.14-16.78,13.14-22.28,0.64c-5.38-15.38,26.4-42.18,53.42-35.28c29.08,8.27,23.96,46.02-7.98,50.15", points: [[59.6, 19.38], [63.54, 88.75]], guideWidth: 8.5, minLength: 0.29 }
    ]
  },
  {
    kana: "も",
    word: "もも",
    picture: "🍑",
    strokes: [
      { label: "1かくめ", pathD: "M49.17,14.75c1.88,1.88,1.86,4.52,1.12,8c-3,14.25-5,26.62-7,42.12c-2.55,19.73-0.75,29.88,17,29.86c20.25-0.02,28.63-13.11,20.01-35.73", points: [[49.17, 14.75], [80.3, 59]], guideWidth: 8.5, minLength: 0.22 },
      { label: "2かくめ", pathD: "M26.54,34.62c1.12,0.88,2.87,2.21,6,2c11.12-0.75,20-2.12,27.74-3.46c3.88-0.67,5.88-1.17,8.88-1.04", points: [[26.54, 34.62], [69.16, 32.12]], guideWidth: 8.5, minLength: 0.18 },
      { label: "3かくめ", pathD: "M26.42,53.38c-1.5,4,1,6.75,7.75,6.75c8.75,0,17.62-1,22.88-1.88c2.01-0.33,5.38-1,7.5-1.75", points: [[26.42, 53.38], [64.55, 56.5]], guideWidth: 8.5, minLength: 0.16, checkDirection: false }
    ]
  },
  {
    kana: "や",
    word: "やま",
    picture: "⛰️",
    strokes: [
      { label: "1かくめ", pathD: "M18,49.38c1.88,1.62,5.25,2.5,8.62,0.88c18.51-8.88,35.76-19.38,50.83-19.26c9.02,0.14,16.01,4.13,15.93,12.29c0,8.33-10.88,16.58-24.5,17.83", points: [[18, 49.38], [68.88, 61.12]], guideWidth: 8.5, minLength: 0.22 },
      { label: "2かくめ", pathD: "M47.13,15.88c5.12,0.88,10.41,4.05,11.5,6.62c2.12,5-1,2.38-2.88,2.62", points: [[47.13, 15.88], [55.75, 25.12]], guideWidth: 8.5, minLength: 0.06, checkDirection: false },
      { label: "3かくめ", pathD: "M30,24.38c2.38,1.88,3.28,2.87,3.88,5.25c2.62,10.5,11.12,41.12,14.75,52.5c0.65,2.04,1.88,6.25,2.88,9.38", points: [[30, 24.38], [51.51, 91.51]], guideWidth: 8.5, minLength: 0.29, checkDirection: false }
    ]
  },
  {
    kana: "ゆ",
    word: "ゆき",
    picture: "☃️",
    strokes: [
      { label: "1かくめ", pathD: "M21.05,25.38c1.38,1.5,2.02,4.13,1.5,6.25c-2.88,11.75-4,22.25-2.12,35c2.77,18.85,1.12,3.88,3.25-1.5c9-22.75,27.24-34.5,44.38-34.5c16.88,0,21.88,11.38,21.88,20.25c0,27.38-30.88,29.62-43,16.75", points: [[21.05, 25.38], [46.94, 67.63]], guideWidth: 8.5, minLength: 0.2 },
      { label: "2かくめ", pathD: "M58.42,16.75c2.62,1.75,3.17,3.13,3.5,7.12c0.88,10.5,1.4,18.72,1.62,29.38c0.5,24-6.25,32-12.38,39.25", points: [[58.42, 16.75], [51.16, 92.5]], guideWidth: 8.5, minLength: 0.31 }
    ]
  },
  {
    kana: "よ",
    word: "よっと",
    picture: "⛵",
    strokes: [
      { label: "1かくめ", pathD: "M58.24,35.38c7.5-1.28,13.74-2.63,18.5-4.1c2.5-0.77,4.77-1.15,6.25-1.15", points: [[58.24, 35.38], [82.99, 30.13]], guideWidth: 8.5, minLength: 0.1 },
      { label: "2かくめ", pathD: "M54.62,13.88c2.25,2.12,2.98,4.13,2.88,6.5c-0.75,17-0.12,34.88,1.39,53.5c1.88,23.07-34.89,20.88-34.89,11.5c0-12,26.25-8,35.98-4.12c8.1,3.23,11.52,4.88,18.52,10.38", points: [[54.62, 13.88], [78.5, 91.64]], guideWidth: 8.5, minLength: 0.34 }
    ]
  },
  {
    kana: "ら",
    word: "らっぱ",
    picture: "🎺",
    strokes: [
      { label: "1かくめ", pathD: "M35.33,15c3.75,3,9.22,4.41,16.5,4.25c11.12-0.25-0.25,2.38-1.25,3.5", points: [[35.33, 15], [50.58, 22.75]], guideWidth: 8.5, minLength: 0.07, checkDirection: false },
      { label: "2かくめ", pathD: "M35.83,35.75c-2.14,4.34-2.79,8.67-3.11,13.24c-0.42,5.84-0.31,12.05-2.14,19.13c-3.16,12.27,1.49,4.77,3,3.5c11.88-10,21.7-12.67,32.61-12.49c9.21,0.15,16.85,5.19,16.76,13.88c-0.12,13.6-14.24,21.49-32.49,22.49", points: [[35.83, 35.75], [50.46, 95.5]], guideWidth: 8.5, minLength: 0.25 }
    ]
  },
  {
    kana: "り",
    word: "りんご",
    picture: "🍎",
    strokes: [
      { label: "1かくめ", pathD: "M38.75,25.25c1.25,1.5,2.24,4.03,1.62,6.62c-2.88,12.13-6.29,29.65-4.25,42.38c2,12.5,1.75-0.75,5.62-6.25", points: [[38.75, 25.25], [41.74, 68]], guideWidth: 8.5, minLength: 0.18 },
      { label: "2かくめ", pathD: "M69.37,18.75c2.25,2.12,2.88,4.12,2.88,6.5c0,2.38,0,26.38,0,35.75c0,16.5-5,25.75-12.62,33.12", points: [[69.37, 18.75], [59.63, 94.12]], guideWidth: 8.5, minLength: 0.31 }
    ]
  },
  {
    kana: "る",
    word: "るすばん",
    picture: "🏠",
    strokes: [
      { label: "1かくめ", pathD: "M34.31,20.38c1.75,1.25,4.62,2.62,8.5,1.5c3.88-1.12,9.62-2.5,15.62-4.62c6-2.12,7.5-0.12,4.38,4.25c-3.12,4.37-18.89,24.62-27.75,34c-8.5,9-13.09,11.89,0.75,3.25c15.62-9.75,43-10.88,43,13.38c0,22.5-40.88,24.5-40.88,12.62c0-11.25,18.12-8.75,24.38-0.38", points: [[34.31, 20.38], [62.31, 84.38]], guideWidth: 8.5, minLength: 0.29 }
    ]
  },
  {
    kana: "れ",
    word: "れもん",
    picture: "🍋",
    strokes: [
      { label: "1かくめ", pathD: "M34.48,13c1.5,1.38,2.83,3.74,2.5,6.38c-0.5,4-2.75,44.5-2.75,52.88c0,8.38,0.12,16.62,0.12,19.5", points: [[34.48, 13], [34.35, 91.76]], guideWidth: 8.5, minLength: 0.33 },
      { label: "2かくめ", pathD: "M16.98,40.75c2.12,1.38,3.74,1.46,7.5,0c4.5-1.75,6.55-2.66,13-5.5c4.25-1.88,4.4,0.24,2.5,3.5c-5.25,9-10.5,16.75-18.88,27.62c-7.55,9.81-6.93,12.85,3.25,3.12c14-13.38,20.34-19.76,33.88-32.5c6.38-6,19.39-12.09,18.14,0.88c-1.02,10.63-1.89,22.13-2.29,30.75c-1.02,21.71,11.53,18,20.15,8.63", points: [[16.98, 40.75], [94.23, 77.25]], guideWidth: 8.5, minLength: 0.35 }
    ]
  },
  {
    kana: "ろ",
    word: "ろうそく",
    picture: "🕯️",
    strokes: [
      { label: "1かくめ", pathD: "M36.95,21.88c1.5,2,4.62,3.62,8.5,2.5c3.88-1.12,8.12-2.25,14.12-4.38c6-2.13,6.53-0.1,3.38,4.25c-7.88,10.88-18,22.75-27.5,35.25c-7.49,9.86-10.68,11.32,2.88,2.25c17.38-11.62,46.62-14,46.62,8.12c0,15.62-16,22.5-32.12,25.12", points: [[36.95, 21.88], [52.83, 94.99]], guideWidth: 8.5, minLength: 0.31 }
    ]
  },
  {
    kana: "わ",
    word: "わに",
    picture: "🐊",
    strokes: [
      { label: "1かくめ", pathD: "M38.53,14.75c1.5,1.38,2.22,3.73,2,6.38c-1,11.87-2.75,44.49-2.75,52.87c0,8.38-0.62,16.62-0.62,19.5", points: [[38.53, 14.75], [37.16, 93.5]], guideWidth: 8.5, minLength: 0.33 },
      { label: "2かくめ", pathD: "M17.53,40.75c2.12,1.38,3.68,1.3,7.5,0c5.88-2,9.8-3.16,16.25-6c4.25-1.88,6.12,0,2.75,4c-6.72,7.96-13,16.5-22.12,27.88c-7.75,9.66-7.54,12.21,3,2.88c21.88-19.38,49.75-35.62,63.5-21c14.36,15.27,1.62,36.62-23.38,42.62", points: [[17.53, 40.75], [65.03, 91.13]], guideWidth: 8.5, minLength: 0.29 }
    ]
  },
  {
    kana: "を",
    word: "りんごをたべる",
    picture: "🍎",
    strokes: [
      { label: "1かくめ", pathD: "M28.56,27.87c1.62,1.13,3.17,1.64,6.01,1.12c10.86-1.99,16.74-3.37,24.71-4.72c3.64-0.62,5.65-0.93,8.4-0.75", points: [[28.56, 27.87], [67.68, 23.52]], guideWidth: 8.5, minLength: 0.16 },
      { label: "2かくめ", pathD: "M49.93,14.38c0.75,1,1.48,3.22,0.38,5.62c-4.62,10.12-10,20.75-17.12,30.25c-9.25,12.33-9.25,11.19,2.12,2.5c9-6.88,23.75-12.12,22.88,19.88", points: [[49.93, 14.38], [58.19, 72.63]], guideWidth: 8.5, minLength: 0.24 },
      { label: "3かくめ", pathD: "M83.06,39.88c0.62,1.75,0,4-3,5.75c-3,1.75-49.62,24.16-44.75,38.25c3.28,9.48,17.93,9.12,29.98,7.75c4.48-0.51,9.15-1.12,12.4-1.75", points: [[83.06, 39.88], [77.69, 89.88]], guideWidth: 8.5, minLength: 0.21, checkDirection: false }
    ]
  },
  {
    kana: "ん",
    word: "みかん",
    picture: "🍊",
    strokes: [
      { label: "1かくめ", pathD: "M56.35,16.5c0.75,1.75,1.13,5.83-0.38,8.25c-7,11.25-27.22,43.47-33.88,54.37c-9,14.75-7.62,16.25,1.5,1.25c17.86-29.36,32-23.76,32-6.75c0,25,19,26.5,34.25-5", points: [[56.35, 16.5], [89.84, 68.62]], guideWidth: 8.5, minLength: 0.26 }
    ]
  }
];

const STORAGE_KEY = "hiragana-eawase-complete-v1";
const FILL_STORAGE_KEY = "hiragana-eawase-complete-fill-v1";
const WORD_STORAGE_KEY = "hiragana-eawase-complete-words-v1";
const STRUGGLE_STORAGE_KEY = "hiragana-eawase-struggles-v1";
const CUSTOM_LESSONS_KEY = "hiragana-eawase-custom-lessons-v1";
const IMAGE_DB_NAME = "hiragana-eawase-images-v1";
const IMAGE_STORE_NAME = "images";
const CUSTOM_IMAGE_MAX_SIZE = 520;
const CUSTOM_EXPORT_VERSION = 1;
const KANJIVG_VIEWBOX_SIZE = 109;
const AUTO_HINT_MISS_COUNT = 3;
const NEXT_CHAR_ADVANCE_DELAY = 1300;
const COMPLETE_ADVANCE_DELAY = 1800;
const LEVEL_CLEAR_ADVANCE_DELAY = 2200;
const RECENT_PROBLEM_LIMIT = 3;
const QUALITY_SAMPLE_COUNT = 36;
const DOUBLE_CIRCLE_SCORE = 0.72;
const DRAWN_STROKE_COLOR = "#27323f";
const LIVE_STROKE_COLOR = "#111827";
const STROKE_PALETTE = [
  [47, 125, 209],
  [255, 123, 110],
  [47, 155, 111],
  [141, 96, 205]
];
const LEVELS = {
  TRACE: "trace",
  FILL: "fill",
  WORD: "word",
  DAKUTEN: "dakuten",
  SMALL: "small",
  LONG: "long",
  SENTENCE: "sentence"
};
const LEVEL_NAMES = {
  [LEVELS.TRACE]: "レベル0 なぞり",
  [LEVELS.FILL]: "レベル1 1文字穴うめ",
  [LEVELS.WORD]: "レベル2 2文字",
  [LEVELS.DAKUTEN]: "レベル3 濁音・半濁音",
  [LEVELS.SMALL]: "レベル4 小さい文字",
  [LEVELS.LONG]: "レベル5 3文字以上",
  [LEVELS.SENTENCE]: "レベル6 つなぎもじ"
};
const LEVEL_ORDER = [
  LEVELS.TRACE,
  LEVELS.FILL,
  LEVELS.WORD,
  LEVELS.DAKUTEN,
  LEVELS.SMALL,
  LEVELS.LONG,
  LEVELS.SENTENCE
];
const LEVEL_GOALS = {
  [LEVELS.TRACE]: lessons.length,
  [LEVELS.FILL]: 10,
  [LEVELS.WORD]: 10,
  [LEVELS.DAKUTEN]: 6,
  [LEVELS.SMALL]: 6,
  [LEVELS.LONG]: 5,
  [LEVELS.SENTENCE]: 8
};
const FROZEN_LEVELS = new Set();
const MISS_REASON_LABELS = {
  short: "線が短い",
  start: "開始位置が違う",
  size: "小さい文字の大きさが違う",
  length: "線の長さが足りない",
  end: "終点位置が違う",
  direction: "書く向きが違う",
  order: "書く順番が違う",
  shape: "線の形が違う",
  unknown: "その他"
};
const SMALL_KANA_GUIDE_TRANSFORM = { x: 10, y: 34, scale: 0.58 };
const SMALL_KANA_ACCEPT_TRANSFORMS = [
  SMALL_KANA_GUIDE_TRANSFORM,
  { x: 20, y: 24, scale: 0.68 },
  { x: 5, y: 42, scale: 0.52 },
  { x: 34, y: 34, scale: 0.58 },
  { x: 45, y: 42, scale: 0.52 }
];
const baseLessonByKana = new Map(lessons.map((lesson) => [lesson.kana, lesson]));

function cloneStroke(stroke) {
  return {
    ...stroke,
    points: stroke.points.map((point) => [...point]),
    transform: stroke.transform ? { ...stroke.transform } : undefined
  };
}

function cloneLesson(baseKana, kana) {
  const base = baseLessonByKana.get(baseKana);
  return {
    ...base,
    kana,
    strokes: base.strokes.map(cloneStroke)
  };
}

function createDakutenLesson(baseKana, kana) {
  const lesson = cloneLesson(baseKana, kana);
  lesson.strokes = [
    ...lesson.strokes,
    { label: `${lesson.strokes.length + 1}かくめ`, pathD: "M77,16 L83,27", points: [[77, 16], [83, 27]], guideWidth: 7, minLength: 0.045, checkDirection: false },
    { label: `${lesson.strokes.length + 2}かくめ`, pathD: "M90,15 L96,26", points: [[90, 15], [96, 26]], guideWidth: 7, minLength: 0.045, checkDirection: false }
  ];
  return lesson;
}

function createHandakutenLesson(baseKana, kana) {
  const lesson = cloneLesson(baseKana, kana);
  lesson.strokes = [
    ...lesson.strokes,
    {
      label: `${lesson.strokes.length + 1}かくめ`,
      pathD: "M88,14 C95,14 100,19 100,26 C100,33 95,38 88,38 C81,38 76,33 76,26 C76,19 81,14 88,14",
      points: [[88, 14], [88, 14]],
      guideWidth: 7,
      minLength: 0.09,
      checkDirection: false
    }
  ];
  return lesson;
}

function transformKanaPoint(point, transform) {
  return [
    transform.x + (point[0] * transform.scale),
    transform.y + (point[1] * transform.scale)
  ];
}

function createSmallKanaLesson(baseKana, kana) {
  const transform = SMALL_KANA_GUIDE_TRANSFORM;
  const base = baseLessonByKana.get(baseKana);
  return {
    ...base,
    kana,
    strokes: base.strokes.map((stroke) => ({
      ...cloneStroke(stroke),
      label: stroke.label,
      smallKana: true,
      sourcePoints: stroke.points.map((point) => [...point]),
      acceptPoints: SMALL_KANA_ACCEPT_TRANSFORMS.map((acceptTransform) => (
        stroke.points.map((point) => transformKanaPoint(point, acceptTransform))
      )),
      points: stroke.points.map((point) => transformKanaPoint(point, transform)),
      guideWidth: Math.max(6, (stroke.guideWidth || 8.5) * 0.92),
      minLength: Math.max(0.04, stroke.minLength * transform.scale),
      transform
    }))
  };
}

const extraLessons = [
  ...["か", "き", "く", "け", "こ"].map((kana, index) => createDakutenLesson(kana, ["が", "ぎ", "ぐ", "げ", "ご"][index])),
  ...["さ", "し", "す", "せ", "そ"].map((kana, index) => createDakutenLesson(kana, ["ざ", "じ", "ず", "ぜ", "ぞ"][index])),
  ...["た", "ち", "つ", "て", "と"].map((kana, index) => createDakutenLesson(kana, ["だ", "ぢ", "づ", "で", "ど"][index])),
  ...["は", "ひ", "ふ", "へ", "ほ"].map((kana, index) => createDakutenLesson(kana, ["ば", "び", "ぶ", "べ", "ぼ"][index])),
  ...["は", "ひ", "ふ", "へ", "ほ"].map((kana, index) => createHandakutenLesson(kana, ["ぱ", "ぴ", "ぷ", "ぺ", "ぽ"][index])),
  createSmallKanaLesson("や", "ゃ"),
  createSmallKanaLesson("ゆ", "ゅ"),
  createSmallKanaLesson("よ", "ょ"),
  createSmallKanaLesson("つ", "っ")
];
const fillLessonOverrides = new Map([
  ["い", { word: "いぬ", picture: "🐶" }]
]);
const fillLessons = lessons.map((lesson) => ({
  ...lesson,
  ...(fillLessonOverrides.get(lesson.kana) || {})
}));
const wordLessons = [
  { word: "いす", picture: "🪑", kanaSequence: ["い", "す"] },
  { word: "いぬ", picture: "🐶", kanaSequence: ["い", "ぬ"] },
  { word: "つり", picture: "🎣", kanaSequence: ["つ", "り"] },
  { word: "くつ", picture: "👟", kanaSequence: ["く", "つ"] },
  { word: "ねこ", picture: "🐱", kanaSequence: ["ね", "こ"] },
  { word: "いえ", picture: "🏠", kanaSequence: ["い", "え"] },
  { word: "やま", picture: "⛰️", kanaSequence: ["や", "ま"] },
  { word: "くも", picture: "☁️", kanaSequence: ["く", "も"] },
  { word: "はな", picture: "🌸", kanaSequence: ["は", "な"] },
  { word: "もも", picture: "🍑", kanaSequence: ["も", "も"] },
  { word: "かさ", picture: "☂️", kanaSequence: ["か", "さ"] },
  { word: "ふね", picture: "🚢", kanaSequence: ["ふ", "ね"] },
  { word: "うみ", picture: "🏖️", kanaSequence: ["う", "み"] },
  { word: "ほし", picture: "⭐", kanaSequence: ["ほ", "し"] },
  { word: "わに", picture: "🐊", kanaSequence: ["わ", "に"] },
  { word: "ふろ", picture: "🛁", kanaSequence: ["ふ", "ろ"] },
  { word: "つき", picture: "🌙", kanaSequence: ["つ", "き"] },
  { word: "まめ", picture: "🫘", kanaSequence: ["ま", "め"] },
  { word: "むし", picture: "🐞", kanaSequence: ["む", "し"] },
  { word: "ゆき", picture: "☃️", kanaSequence: ["ゆ", "き"] }
];
const dakutenLessons = [
  { word: "かぎ", picture: "🔑", kanaSequence: ["か", "ぎ"] },
  { word: "ぞう", picture: "🐘", kanaSequence: ["ぞ", "う"] },
  { word: "ぶた", picture: "🐷", kanaSequence: ["ぶ", "た"] },
  { word: "ばす", picture: "🚌", kanaSequence: ["ば", "す"] },
  { word: "ぱん", picture: "🍞", kanaSequence: ["ぱ", "ん"] },
  { word: "ぴざ", picture: "🍕", kanaSequence: ["ぴ", "ざ"] },
  { word: "だんご", picture: "🍡", kanaSequence: ["だ", "ん", "ご"] },
  { word: "でんわ", picture: "☎️", kanaSequence: ["で", "ん", "わ"] }
];
const smallKanaWordLessons = [
  { word: "おちゃ", picture: "🍵", kanaSequence: ["お", "ち", "ゃ"] },
  { word: "きゅうり", picture: "🥒", kanaSequence: ["き", "ゅ", "う", "り"] },
  { word: "しゃしん", picture: "📷", kanaSequence: ["し", "ゃ", "し", "ん"] },
  { word: "ちょこ", picture: "🍫", kanaSequence: ["ち", "ょ", "こ"] },
  { word: "きしゃ", picture: "🚂", kanaSequence: ["き", "し", "ゃ"] },
  { word: "りょこう", picture: "🧳", kanaSequence: ["り", "ょ", "こ", "う"] },
  { word: "らっぱ", picture: "🎺", kanaSequence: ["ら", "っ", "ぱ"] },
  { word: "じゃがいも", picture: "🥔", kanaSequence: ["じ", "ゃ", "が", "い", "も"] }
];
const longWordLessons = [
  { word: "さかな", picture: "🐟", kanaSequence: ["さ", "か", "な"] },
  { word: "くるま", picture: "🚗", kanaSequence: ["く", "る", "ま"] },
  { word: "みかん", picture: "🍊", kanaSequence: ["み", "か", "ん"] },
  { word: "おにぎり", picture: "🍙", kanaSequence: ["お", "に", "ぎ", "り"] },
  { word: "でんしゃ", picture: "🚃", kanaSequence: ["で", "ん", "し", "ゃ"] },
  { word: "じてんしゃ", picture: "🚲", kanaSequence: ["じ", "て", "ん", "し", "ゃ"] },
  { word: "びょういん", picture: "🏥", kanaSequence: ["び", "ょ", "う", "い", "ん"] },
  { word: "しょうぼうしゃ", picture: "🚒", kanaSequence: ["し", "ょ", "う", "ぼ", "う", "し", "ゃ"] }
];
const sentenceLessons = [
  { word: "とりがとぶ。", picture: "🐦", prefix: "とり", kanaSequence: ["が"], suffix: "とぶ。", phase: 1 },
  { word: "はながさく。", picture: "🌸", prefix: "はな", kanaSequence: ["が"], suffix: "さく。", phase: 1 },
  { word: "いぬがいる。", picture: "🐶", prefix: "いぬ", kanaSequence: ["が"], suffix: "いる。", phase: 1 },
  { word: "みずをのむ。", picture: "🥤", prefix: "みず", kanaSequence: ["を"], suffix: "のむ。", phase: 1 },
  { word: "ごはんをたべる。", picture: "🍚", prefix: "ごはん", kanaSequence: ["を"], suffix: "たべる。", phase: 1 },
  { word: "ほんをよむ。", picture: "📖", prefix: "ほん", kanaSequence: ["を"], suffix: "よむ。", phase: 1 },
  { word: "これはいぬ。", picture: "🐶", prefix: "これ", kanaSequence: ["は"], suffix: "いぬ。", phase: 2 },
  { word: "ぼくはあるく。", picture: "🧒🚶", prefix: "ぼく", kanaSequence: ["は"], suffix: "あるく。", phase: 2 },
  { word: "がっこうへいく。", picture: "🏫", prefix: "がっこう", kanaSequence: ["へ"], suffix: "いく。", phase: 2 },
  { word: "いえへかえる。", picture: "🏠", prefix: "いえ", kanaSequence: ["へ"], suffix: "かえる。", phase: 2 },
  { word: "くつをはく。", picture: "👟", prefix: "くつ", kanaSequence: ["を"], suffix: "はく。", phase: 2 },
  { word: "てをあらう。", picture: "🧼", prefix: "て", kanaSequence: ["を"], suffix: "あらう。", phase: 2 }
];
const allLessons = [...lessons, ...extraLessons];
const lessonByKana = new Map(allLessons.map((lesson) => [lesson.kana, lesson]));

const canvas = document.querySelector("#writingCanvas");
const ctx = canvas.getContext("2d");
const pictureEmoji = document.querySelector("#pictureEmoji");
const promptLabel = document.querySelector("#promptLabel");
const pictureWord = document.querySelector("#pictureWord");
const targetKana = document.querySelector("#targetKana");
const scoreText = document.querySelector("#scoreText");
const statusMessage = document.querySelector("#statusMessage");
const strokeList = document.querySelector("#strokeList");
const stageStrip = document.querySelector("#stageStrip");
const successBadge = document.querySelector("#successBadge");
const resultMark = document.querySelector("#resultMark");
const undoButton = document.querySelector("#undoButton");
const clearButton = document.querySelector("#clearButton");
const hintButton = document.querySelector("#hintButton");
const nextButton = document.querySelector("#nextButton");
const menuToggleButton = document.querySelector("#menuToggleButton");
const levelPanel = document.querySelector("#levelPanel");
const stageToggleButton = document.querySelector("#stageToggleButton");
const adultToggleButton = document.querySelector("#adultToggleButton");
const adultPanel = document.querySelector("#adultPanel");
const adultSummary = document.querySelector("#adultSummary");
const struggleList = document.querySelector("#struggleList");
const adultDataMessage = document.querySelector("#adultDataMessage");
const customEditorButton = document.querySelector("#customEditorButton");
const customLessonPanel = document.querySelector("#customLessonPanel");
const customLevelSelect = document.querySelector("#customLevelSelect");
const customAnswerInput = document.querySelector("#customAnswerInput");
const customPromptInput = document.querySelector("#customPromptInput");
const customImageInput = document.querySelector("#customImageInput");
const customImagePreview = document.querySelector("#customImagePreview");
const customLessonMessage = document.querySelector("#customLessonMessage");
const questionListButton = document.querySelector("#questionListButton");
const questionListPanel = document.querySelector("#questionListPanel");
const questionListBody = document.querySelector("#questionListBody");
const questionFilterLevel = document.querySelector("#questionFilterLevel");
const questionFilterSource = document.querySelector("#questionFilterSource");
const questionFilterText = document.querySelector("#questionFilterText");
const questionFilterResetButton = document.querySelector("#questionFilterResetButton");
const questionFilterCount = document.querySelector("#questionFilterCount");
const exportCustomLessonsButton = document.querySelector("#exportCustomLessonsButton");
const importCustomLessonsButton = document.querySelector("#importCustomLessonsButton");
const importCustomLessonsInput = document.querySelector("#importCustomLessonsInput");
const resetProgressButton = document.querySelector("#resetProgressButton");
const levelZeroButton = document.querySelector("#levelZeroButton");
const levelOneButton = document.querySelector("#levelOneButton");
const levelTwoButton = document.querySelector("#levelTwoButton");
const levelThreeButton = document.querySelector("#levelThreeButton");
const levelFourButton = document.querySelector("#levelFourButton");
const levelFiveButton = document.querySelector("#levelFiveButton");
const levelSixButton = document.querySelector("#levelSixButton");
const levelStatusText = document.querySelector("#levelStatusText");

const compactMenuMedia = window.matchMedia ? window.matchMedia("(max-width: 980px)") : { matches: false };

const state = {
  activeLevel: LEVELS.TRACE,
  lessonIndex: 0,
  fillIndex: 0,
  fillQueue: [],
  lastFillIndex: -1,
  recentFillKeys: [],
  wordIndex: 0,
  wordQueue: [],
  lastWordIndex: -1,
  recentWordKeys: [],
  wordCharIndex: 0,
  missCount: 0,
  currentStroke: 0,
  completedStrokes: [],
  liveStroke: [],
  drawing: false,
  autoAdvanceTimer: 0,
  autoAdvanceCallback: null,
  menuPanelOpen: !compactMenuMedia.matches,
  menuPanelTouched: false,
  stageListOpen: false,
  adultPanelOpen: false,
  customEditorOpen: false,
  questionListOpen: false,
  questionFilterLevel: "all",
  questionFilterSource: "all",
  questionFilterText: "",
  showTrace: true,
  completedKana: loadCompletedKana(),
  completedFillKana: loadCompletedFillKana(),
  completedWords: loadCompletedWords(),
  customLessons: loadCustomLessons(),
  imageUrls: new Map(),
  loadingImageIds: new Set(),
  missingImageIds: new Set(),
  customImagePreviewUrl: "",
  customTestId: "",
  struggleLog: loadStruggleLog(),
  messageTone: "normal"
};

function loadCompletedKana() {
  try {
    const stored = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    return new Set(Array.isArray(stored) ? stored : []);
  } catch {
    return new Set();
  }
}

function saveCompletedKana() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify([...state.completedKana]));
}

function loadCompletedFillKana() {
  try {
    const stored = JSON.parse(localStorage.getItem(FILL_STORAGE_KEY) || "[]");
    return new Set(Array.isArray(stored) ? stored : []);
  } catch {
    return new Set();
  }
}

function saveCompletedFillKana() {
  localStorage.setItem(FILL_STORAGE_KEY, JSON.stringify([...state.completedFillKana]));
}

function loadCompletedWords() {
  try {
    const stored = JSON.parse(localStorage.getItem(WORD_STORAGE_KEY) || "[]");
    return new Set(Array.isArray(stored) ? stored : []);
  } catch {
    return new Set();
  }
}

function saveCompletedWords() {
  localStorage.setItem(WORD_STORAGE_KEY, JSON.stringify([...state.completedWords]));
}

function loadStruggleLog() {
  try {
    const stored = JSON.parse(localStorage.getItem(STRUGGLE_STORAGE_KEY) || "[]");
    return Array.isArray(stored) ? stored : [];
  } catch {
    return [];
  }
}

function saveStruggleLog() {
  localStorage.setItem(STRUGGLE_STORAGE_KEY, JSON.stringify(state.struggleLog.slice(0, 120)));
}

function loadCustomLessons() {
  try {
    const stored = JSON.parse(localStorage.getItem(CUSTOM_LESSONS_KEY) || "[]");
    if (!Array.isArray(stored)) {
      return [];
    }

    return stored
      .map(normalizeCustomLesson)
      .filter(Boolean);
  } catch {
    return [];
  }
}

function saveCustomLessons() {
  localStorage.setItem(CUSTOM_LESSONS_KEY, JSON.stringify(state.customLessons));
}

function normalizeCustomLesson(lesson) {
  if (!lesson || typeof lesson !== "object") {
    return null;
  }

  const level = lesson.level;
  if (![LEVELS.FILL, LEVELS.WORD, LEVELS.DAKUTEN, LEVELS.SMALL, LEVELS.LONG, LEVELS.SENTENCE].includes(level)) {
    return null;
  }

  const id = String(lesson.id || "");
  const imageId = String(lesson.imageId || "");
  const word = normalizeKanaText(lesson.word || "");
  const kanaSequence = Array.isArray(lesson.kanaSequence)
    ? lesson.kanaSequence.map((kana) => normalizeKanaText(kana)).filter(Boolean)
    : [];

  if (!id || !imageId || !word || kanaSequence.length === 0) {
    return null;
  }

  const normalized = {
    id,
    key: lesson.key || `custom:${id}`,
    source: "custom",
    level,
    word,
    picture: lesson.picture || "画像",
    imageId,
    kanaSequence
  };

  if (level === LEVELS.FILL) {
    normalized.kana = normalizeKanaText(lesson.kana || kanaSequence[0] || "");
  }

  if (level === LEVELS.SENTENCE) {
    normalized.prefix = String(lesson.prefix || "");
    normalized.suffix = String(lesson.suffix || "");
    normalized.phase = Number.isFinite(Number(lesson.phase)) ? Number(lesson.phase) : 1;
  }

  return normalized;
}

function currentWord() {
  return currentWordSet()[state.wordIndex];
}

function currentFill() {
  return currentFillSet()[state.fillIndex];
}

function isWordLevel(level = state.activeLevel) {
  return [LEVELS.WORD, LEVELS.DAKUTEN, LEVELS.SMALL, LEVELS.LONG, LEVELS.SENTENCE].includes(level);
}

function currentFillSet() {
  return [...fillLessons, ...customLessonsForLevel(LEVELS.FILL)];
}

function currentWordSet(level = state.activeLevel) {
  let baseLessons = wordLessons;
  switch (level) {
    case LEVELS.DAKUTEN:
      baseLessons = dakutenLessons;
      break;
    case LEVELS.SMALL:
      baseLessons = smallKanaWordLessons;
      break;
    case LEVELS.LONG:
      baseLessons = longWordLessons;
      break;
    case LEVELS.SENTENCE:
      baseLessons = sentenceLessons;
      break;
    case LEVELS.WORD:
    default:
      baseLessons = wordLessons;
  }

  return [...baseLessons, ...customLessonsForLevel(level)];
}

function customLessonsForLevel(level) {
  return state.customLessons
    .filter((lesson) => lesson.level === level)
    .map(materializeCustomLesson)
    .filter(Boolean);
}

function materializeCustomLesson(lesson) {
  if (lesson.level !== LEVELS.FILL) {
    return lesson;
  }

  const base = lessonByKana.get(lesson.kana);
  if (!base) {
    return null;
  }

  return {
    ...base,
    ...lesson,
    strokes: base.strokes
  };
}

function currentLesson() {
  if (isWordLevel()) {
    return lessonByKana.get(currentWord().kanaSequence[state.wordCharIndex]);
  }

  if (state.activeLevel === LEVELS.FILL) {
    return currentFill();
  }

  return lessons[state.lessonIndex];
}

function isKanaLevelComplete() {
  return state.completedKana.size >= lessons.length;
}

function isWordComplete() {
  return isWordLevel() && state.wordCharIndex >= currentWord().kanaSequence.length - 1 && isLessonComplete();
}

function shuffledIndexes(length, lastIndex) {
  const indexes = Array.from({ length }, (_, index) => index);
  for (let index = indexes.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [indexes[index], indexes[swapIndex]] = [indexes[swapIndex], indexes[index]];
  }

  if (indexes.length > 1 && indexes[0] === lastIndex) {
    [indexes[0], indexes[1]] = [indexes[1], indexes[0]];
  }

  return indexes;
}

function levelGoal(level = state.activeLevel) {
  if (isWordLevel(level)) {
    return Math.min(LEVEL_GOALS[level], currentWordSet(level).length);
  }

  if (level === LEVELS.FILL) {
    return Math.min(LEVEL_GOALS[level], currentFillSet().length);
  }

  return LEVEL_GOALS[level];
}

function completedCountForLevel(level = state.activeLevel) {
  if (isWordLevel(level)) {
    return currentWordSet(level).filter((lesson) => state.completedWords.has(lessonCompletionKey(lesson))).length;
  }

  if (level === LEVELS.FILL) {
    return currentFillSet().filter((lesson) => state.completedFillKana.has(lessonCompletionKey(lesson))).length;
  }

  return state.completedKana.size;
}

function completionWillReachGoal(level, key) {
  const before = completedCountForLevel(level);
  const goal = levelGoal(level);
  if (before >= goal) {
    return false;
  }

  let isNewCompletion = false;
  if (isWordLevel(level)) {
    isNewCompletion = !state.completedWords.has(key);
  } else if (level === LEVELS.FILL) {
    isNewCompletion = !state.completedFillKana.has(key);
  } else {
    isNewCompletion = !state.completedKana.has(key);
  }

  return before + (isNewCompletion ? 1 : 0) >= goal;
}

function lessonCompletionKey(lesson) {
  if (lesson.key) {
    return lesson.key;
  }

  return lesson.kanaSequence ? lesson.word : lesson.kana;
}

function nextLevelAfter(level = state.activeLevel) {
  const index = LEVEL_ORDER.indexOf(level);
  if (index < 0 || index >= LEVEL_ORDER.length - 1) {
    return null;
  }

  for (let nextIndex = index + 1; nextIndex < LEVEL_ORDER.length; nextIndex += 1) {
    const nextLevel = LEVEL_ORDER[nextIndex];
    if (!FROZEN_LEVELS.has(nextLevel)) {
      return nextLevel;
    }
  }

  return null;
}

function chooseNextIndex(items, getKey, isCompleted, recentKeys) {
  const indexes = items.map((_, index) => index);
  const recent = new Set(recentKeys);
  const notCompleted = indexes.filter((index) => !isCompleted(items[index]));
  const notRecent = indexes.filter((index) => !recent.has(getKey(items[index])));
  const preferred = notCompleted.filter((index) => !recent.has(getKey(items[index])));
  const pool = preferred.length > 0
    ? preferred
    : notCompleted.length > 0
      ? notCompleted
      : notRecent.length > 0
        ? notRecent
        : indexes;
  return pool[Math.floor(Math.random() * pool.length)] || 0;
}

function rememberRecentKey(keys, key) {
  return [key, ...keys.filter((item) => item !== key)].slice(0, RECENT_PROBLEM_LIMIT);
}

function nextFillIndex() {
  const currentSet = currentFillSet();
  if (currentSet.length <= 1) {
    return 0;
  }

  const nextIndex = chooseNextIndex(
    currentSet,
    (lesson) => `fill:${lessonCompletionKey(lesson)}`,
    (lesson) => state.completedFillKana.has(lessonCompletionKey(lesson)),
    state.recentFillKeys
  );
  state.lastFillIndex = nextIndex;
  state.recentFillKeys = rememberRecentKey(state.recentFillKeys, `fill:${lessonCompletionKey(currentSet[nextIndex])}`);
  return nextIndex;
}

function nextWordIndex() {
  const currentSet = currentWordSet();
  if (currentSet.length <= 1) {
    return 0;
  }

  const level = state.activeLevel;
  const sourceIndexes = wordSelectionIndexes(currentSet);
  const sourceLessons = sourceIndexes.map((index) => currentSet[index]);
  const nextIndex = chooseNextIndex(
    sourceLessons,
    (lesson) => `${level}:${lessonCompletionKey(lesson)}`,
    (lesson) => state.completedWords.has(lessonCompletionKey(lesson)),
    state.recentWordKeys
  );
  const selectedIndex = sourceIndexes[nextIndex];
  state.lastWordIndex = selectedIndex;
  state.recentWordKeys = rememberRecentKey(state.recentWordKeys, `${level}:${lessonCompletionKey(currentSet[selectedIndex])}`);
  return selectedIndex;
}

function wordSelectionIndexes(currentSet) {
  const allIndexes = currentSet.map((_, index) => index);
  if (state.activeLevel !== LEVELS.SENTENCE) {
    return allIndexes;
  }

  const incomplete = allIndexes.filter((index) => !state.completedWords.has(lessonCompletionKey(currentSet[index])));
  if (incomplete.length === 0) {
    return allIndexes;
  }

  const nextPhase = Math.min(...incomplete.map((index) => currentSet[index].phase || 1));
  return incomplete.filter((index) => (currentSet[index].phase || 1) === nextPhase);
}

function canvasSize() {
  return {
    width: canvas.clientWidth || 420,
    height: canvas.clientHeight || 420
  };
}

function resizeCanvas() {
  const { width, height } = canvasSize();
  const ratio = Math.min(window.devicePixelRatio || 1, 2);
  canvas.width = Math.round(width * ratio);
  canvas.height = Math.round(height * ratio);
  ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
  drawBoard();
}

function toCanvasPoint(point) {
  if (point[0] > 1 || point[1] > 1) {
    const transform = getGuideTransform();
    return {
      x: transform.offsetX + (point[0] * transform.scale),
      y: transform.offsetY + (point[1] * transform.scale)
    };
  }

  const { width, height } = canvasSize();
  return {
    x: point[0] * width,
    y: point[1] * height
  };
}

function getGuideTransform() {
  const { width, height } = canvasSize();
  const size = Math.min(width, height) * 0.92;
  const scale = size / KANJIVG_VIEWBOX_SIZE;

  return {
    scale,
    offsetX: (width - (KANJIVG_VIEWBOX_SIZE * scale)) / 2,
    offsetY: (height - (KANJIVG_VIEWBOX_SIZE * scale)) / 2
  };
}

function getPointerPoint(event) {
  const rect = canvas.getBoundingClientRect();
  return {
    x: event.clientX - rect.left,
    y: event.clientY - rect.top
  };
}

function drawBoard() {
  const lesson = currentLesson();
  const { width, height } = canvasSize();
  const size = Math.min(width, height);

  ctx.clearRect(0, 0, width, height);
  drawPaperGrid(width, height);

  if (state.showTrace) {
    getFlowDrawOrder(lesson).forEach(({ stroke, index }) => {
      const isCurrent = index === state.currentStroke;
      drawGuideStroke(stroke, {
        color: strokeGuideColor(index, isCurrent, index < state.currentStroke),
        width: (stroke.guideWidth || 8.5) + (isCurrent ? 1.5 : 0)
      });
    });

    lesson.strokes.forEach((stroke, index) => {
      const isCurrent = index === state.currentStroke;
      const isDone = index < state.currentStroke;
      drawStartMarker(stroke, index + 1, isCurrent, isDone);
    });
  }

  state.completedStrokes.forEach((stroke) => {
    drawFreeStroke(stroke.points, DRAWN_STROKE_COLOR, size * 0.035);
  });

  if (state.liveStroke.length > 0) {
    drawFreeStroke(state.liveStroke, LIVE_STROKE_COLOR, size * 0.035);
  }
}

function drawPaperGrid(width, height) {
  ctx.save();
  ctx.strokeStyle = "rgba(47, 125, 209, 0.12)";
  ctx.lineWidth = 2;
  ctx.setLineDash([8, 10]);
  ctx.beginPath();
  ctx.moveTo(width * 0.18, height * 0.5);
  ctx.lineTo(width * 0.82, height * 0.5);
  ctx.moveTo(width * 0.5, height * 0.18);
  ctx.lineTo(width * 0.5, height * 0.82);
  ctx.stroke();
  ctx.restore();
}

function getFlowDrawOrder(lesson) {
  return lesson.strokes
    .map((stroke, index) => ({ stroke, index }))
    .sort((a, b) => flowLayer(a.index) - flowLayer(b.index));
}

function flowLayer(index) {
  if (index === state.currentStroke) {
    return 2;
  }

  if (index < state.currentStroke) {
    return 1;
  }

  return 0;
}

function strokeGuideColor(index, isCurrent, isDone) {
  const [red, green, blue] = STROKE_PALETTE[index % STROKE_PALETTE.length];
  const alpha = isCurrent ? 0.92 : isDone ? 0.72 : 0.28;
  return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
}

function drawGuideStroke(stroke, options) {
  if (!stroke.pathD || typeof Path2D === "undefined") {
    drawFreeStroke(stroke.points.map(toCanvasPoint), options.color, options.width * getGuideTransform().scale);
    return;
  }

  const transform = getGuideTransform();
  ctx.save();
  ctx.translate(transform.offsetX, transform.offsetY);
  ctx.scale(transform.scale, transform.scale);
  if (stroke.transform) {
    ctx.translate(stroke.transform.x, stroke.transform.y);
    ctx.scale(stroke.transform.scale, stroke.transform.scale);
  }
  ctx.strokeStyle = options.color;
  ctx.lineWidth = options.width;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  ctx.stroke(new Path2D(stroke.pathD));
  ctx.restore();
}

function drawStartMarker(stroke, number, isCurrent, isDone) {
  const start = toCanvasPoint(stroke.points[0]);
  const radius = Math.max(14, Math.min(canvasSize().width, canvasSize().height) * 0.04);
  ctx.save();
  ctx.fillStyle = isDone ? "#2f9b6f" : isCurrent ? "#2f7dd1" : "#ffffff";
  ctx.strokeStyle = isCurrent ? "#1f5f9f" : "#9fb2bd";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(start.x, start.y, radius, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  ctx.fillStyle = isDone || isCurrent ? "#ffffff" : "#64748b";
  ctx.font = `900 ${Math.floor(radius * 1.15)}px "Yu Gothic", "Meiryo", sans-serif`;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(String(number), start.x, start.y + 1);
  ctx.restore();
}

function drawFreeStroke(points, color, width) {
  if (points.length < 2) {
    return;
  }
  ctx.save();
  ctx.strokeStyle = color;
  ctx.lineWidth = width;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  drawPolyline(points);
  ctx.stroke();
  ctx.restore();
}

function drawPolyline(points, drawingContext = ctx) {
  drawingContext.beginPath();
  drawingContext.moveTo(points[0].x, points[0].y);
  for (let index = 1; index < points.length; index += 1) {
    const mid = {
      x: (points[index - 1].x + points[index].x) / 2,
      y: (points[index - 1].y + points[index].y) / 2
    };
    drawingContext.quadraticCurveTo(points[index - 1].x, points[index - 1].y, mid.x, mid.y);
  }
  const last = points[points.length - 1];
  drawingContext.lineTo(last.x, last.y);
}

function startDrawing(event) {
  if (isLessonComplete()) {
    return;
  }
  event.preventDefault();
  canvas.setPointerCapture(event.pointerId);
  state.drawing = true;
  state.liveStroke = [getPointerPoint(event)];
  drawBoard();
}

function continueDrawing(event) {
  if (!state.drawing) {
    return;
  }
  event.preventDefault();
  state.liveStroke.push(getPointerPoint(event));
  drawBoard();
}

function stopDrawing(event) {
  if (!state.drawing) {
    return;
  }
  event.preventDefault();
  state.drawing = false;
  const lesson = currentLesson();
  const expected = lesson.strokes[state.currentStroke];
  const result = validateStroke(state.liveStroke, expected);

  if (result.ok) {
    state.completedStrokes.push({
      strokeIndex: state.currentStroke,
      points: [...state.liveStroke]
    });
    state.currentStroke += 1;
    state.liveStroke = [];

    if (state.currentStroke >= lesson.strokes.length) {
      completeLesson();
    } else {
      setMessage(`${state.currentStroke + 1}かくめへ。まるから おてほんに そって なぞろう`, "good");
    }
  } else {
    state.liveStroke = [];
    handleMiss(result.message, result.reason);
  }

  render();
}

function handleMiss(message, reason = "unknown") {
  const nextMissCount = state.missCount + 1;
  const willShowHint = state.activeLevel !== LEVELS.TRACE
    && nextMissCount >= AUTO_HINT_MISS_COUNT
    && !state.showTrace;
  recordStruggle(reason, willShowHint);

  if (state.activeLevel === LEVELS.TRACE) {
    setMessage(message, "alert");
    return;
  }

  state.missCount = nextMissCount;
  if (state.missCount >= AUTO_HINT_MISS_COUNT && !state.showTrace) {
    state.showTrace = true;
    setMessage("ひんとを だしたよ。おてほんせんと かくじゅんを みて、もういちど やってみよう", "alert");
    return;
  }

  const remaining = Math.max(0, AUTO_HINT_MISS_COUNT - state.missCount);
  setMessage(remaining > 0 ? `${message}。あと ${remaining} かいで ひんとが でるよ` : message, "alert");
}

function recordStruggle(reason, hintShown) {
  const lesson = currentLesson();
  const entry = {
    time: new Date().toISOString(),
    level: state.activeLevel,
    task: currentPracticeLabel(),
    kana: lesson.kana,
    stroke: state.currentStroke + 1,
    reason,
    hintShown
  };
  state.struggleLog = [entry, ...state.struggleLog].slice(0, 120);
  saveStruggleLog();
  renderAdultPanel();
}

function currentPracticeLabel() {
  if (isWordLevel()) {
    return currentWord().word;
  }

  if (state.activeLevel === LEVELS.FILL) {
    return currentFill().word;
  }

  return currentLesson().kana;
}

function validateStroke(points, expected) {
  if (points.length < 3) {
    return { ok: false, reason: "short", message: "もうすこし ながく せんを かこう" };
  }

  if (expected.smallKana) {
    return validateSmallKanaStroke(points, expected);
  }

  const scale = Math.min(canvasSize().width, canvasSize().height);
  const first = points[0];
  const last = points[points.length - 1];
  const expectedStart = toCanvasPoint(expected.points[0]);
  const expectedEnd = toCanvasPoint(expected.points[expected.points.length - 1]);
  const startDistance = distance(first, expectedStart) / scale;
  const endDistance = distance(last, expectedEnd) / scale;
  const length = pathLength(points) / scale;
  const startLimit = state.showTrace ? 0.2 : 0.26;
  const endLimit = state.showTrace ? 0.31 : 0.4;

  if (startDistance > startLimit) {
    return { ok: false, reason: "start", message: state.showTrace ? "まるから はじめよう" : "もういちど かいてみよう" };
  }

  if (length < expected.minLength) {
    return { ok: false, reason: "length", message: "せんを もうすこし さきまで のばそう" };
  }

  if (endDistance > endLimit) {
    return { ok: false, reason: "end", message: "おてほんに そって、もういちど やってみよう" };
  }

  if (expected.checkDirection !== false && directionScore(first, last, expectedStart, expectedEnd) < -0.45) {
    return { ok: false, reason: "direction", message: "むきが ちがうよ" };
  }

  const fit = strokeFitMetrics(points, expected);
  if (fit.lengthRatio > 2.35 || (state.showTrace && fit.averageDistance > 0.16)) {
    return { ok: false, reason: "shape", message: "おてほんの せんに そって かこう" };
  }

  const competingFit = bestCompetingStrokeFit(points, state.currentStroke);
  if (
    competingFit
    && competingFit.averageDistance < 0.095
    && competingFit.averageDistance + 0.025 < fit.averageDistance
  ) {
    return { ok: false, reason: "order", message: "かくじゅんが ちがうよ" };
  }

  return { ok: true };
}

function strokeFitMetrics(points, expected) {
  const expectedSamples = sampleExpectedStroke(expected, QUALITY_SAMPLE_COUNT);
  const actualSamples = resamplePoints(points, expectedSamples.length);
  const scale = Math.min(canvasSize().width, canvasSize().height);
  const averageDistance = expectedSamples.reduce((total, expectedPoint, sampleIndex) => {
    return total + distance(expectedPoint, actualSamples[sampleIndex]);
  }, 0) / Math.max(expectedSamples.length, 1);
  const expectedLength = pathLength(expectedSamples) || 1;
  const actualLength = pathLength(actualSamples) || 1;

  return {
    averageDistance: averageDistance / scale,
    lengthRatio: actualLength / expectedLength
  };
}

function bestCompetingStrokeFit(points, currentStrokeIndex) {
  const lesson = currentLesson();
  let bestFit = null;

  lesson.strokes.forEach((stroke, index) => {
    if (index === currentStrokeIndex || stroke.smallKana) {
      return;
    }

    const fit = strokeFitMetrics(points, stroke);
    if (!bestFit || fit.averageDistance < bestFit.averageDistance) {
      bestFit = {
        ...fit,
        index
      };
    }
  });

  return bestFit;
}

function validateSmallKanaStroke(points, expected) {
  const scale = Math.min(canvasSize().width, canvasSize().height);
  const first = points[0];
  const last = points[points.length - 1];
  const length = pathLength(points) / scale;
  const minLength = Math.max(0.025, expected.minLength * 0.68);

  if (length < minLength) {
    return { ok: false, reason: "length", message: "せんを もうすこし さきまで のばそう" };
  }

  const candidatePointSets = expected.acceptPoints || [expected.points];
  let closeButWrongDirection = false;
  for (const candidatePoints of candidatePointSets) {
    const expectedStart = toCanvasPoint(candidatePoints[0]);
    const expectedEnd = toCanvasPoint(candidatePoints[candidatePoints.length - 1]);
    const startDistance = distance(first, expectedStart) / scale;
    const endDistance = distance(last, expectedEnd) / scale;

    if (startDistance <= 0.3 && endDistance <= 0.44) {
      if (expected.checkDirection !== false && directionScore(first, last, expectedStart, expectedEnd) < -0.45) {
        closeButWrongDirection = true;
      } else {
        return { ok: true };
      }
    }
  }

  if (closeButWrongDirection) {
    return { ok: false, reason: "direction", message: "むきが ちがうよ" };
  }

  const expectedSamples = sampleExpectedStroke(expected, QUALITY_SAMPLE_COUNT);
  const actualSamples = resamplePoints(points, expectedSamples.length);
  const expectedSpan = pointSpan(expectedSamples);
  const actualSpan = pointSpan(actualSamples);

  if (Math.max(actualSpan.width, actualSpan.height) > Math.max(32, Math.max(expectedSpan.width, expectedSpan.height) * 1.7)) {
    return { ok: false, reason: "size", message: "ちいさく かいてみよう" };
  }

  const shapeDistance = normalizedShapeDistance(actualSamples, expectedSamples);
  if (shapeDistance <= 0.36) {
    return { ok: true };
  }

  return { ok: false, reason: "start", message: "ちいさい もじは、ちいさく かいてみよう" };
}

function evaluateWritingQuality(lesson) {
  const scores = lesson.strokes.map((stroke, index) => {
    const actualStroke = state.completedStrokes.find((item) => item.strokeIndex === index);
    if (!actualStroke || actualStroke.points.length < 2) {
      return 0;
    }

    const expectedSamples = sampleExpectedStroke(stroke, QUALITY_SAMPLE_COUNT);
    const actualSamples = resamplePoints(actualStroke.points, expectedSamples.length);
    const scale = Math.min(canvasSize().width, canvasSize().height);
    const averageDistance = expectedSamples.reduce((total, expectedPoint, sampleIndex) => {
      return total + distance(expectedPoint, actualSamples[sampleIndex]);
    }, 0) / expectedSamples.length;
    const shapeScore = 1 - Math.min((averageDistance / scale) / 0.16, 1);
    const expectedLength = pathLength(expectedSamples) || 1;
    const actualLength = pathLength(actualSamples) || 1;
    const lengthScore = Math.min(actualLength / expectedLength, expectedLength / actualLength);

    return (shapeScore * 0.78) + (lengthScore * 0.22);
  });

  return scores.reduce((total, score) => total + score, 0) / Math.max(scores.length, 1);
}

function sampleExpectedStroke(stroke, sampleCount) {
  if (!stroke.pathD || typeof document.createElementNS !== "function") {
    return resamplePoints(stroke.points.map(toCanvasPoint), sampleCount);
  }

  try {
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", stroke.pathD);
    const totalLength = path.getTotalLength();
    if (!Number.isFinite(totalLength) || totalLength <= 0) {
      return resamplePoints(stroke.points.map(toCanvasPoint), sampleCount);
    }

    const transform = getGuideTransform();
    return Array.from({ length: sampleCount }, (_, index) => {
      const point = path.getPointAtLength((totalLength * index) / (sampleCount - 1));
      const sourcePoint = stroke.transform
        ? {
            x: stroke.transform.x + (point.x * stroke.transform.scale),
            y: stroke.transform.y + (point.y * stroke.transform.scale)
          }
        : point;
      return {
        x: transform.offsetX + (sourcePoint.x * transform.scale),
        y: transform.offsetY + (sourcePoint.y * transform.scale)
      };
    });
  } catch {
    return resamplePoints(stroke.points.map(toCanvasPoint), sampleCount);
  }
}

function resamplePoints(points, sampleCount) {
  if (points.length === 0) {
    return [];
  }

  if (points.length === 1 || sampleCount <= 1) {
    return Array.from({ length: sampleCount }, () => points[0]);
  }

  const total = pathLength(points);
  if (total <= 0) {
    return Array.from({ length: sampleCount }, () => points[0]);
  }

  const samples = [];
  let segmentIndex = 1;
  let walked = 0;

  for (let sampleIndex = 0; sampleIndex < sampleCount; sampleIndex += 1) {
    const target = (total * sampleIndex) / (sampleCount - 1);

    while (segmentIndex < points.length) {
      const previous = points[segmentIndex - 1];
      const current = points[segmentIndex];
      const segmentLength = distance(previous, current);
      if (walked + segmentLength >= target) {
        const ratio = segmentLength === 0 ? 0 : (target - walked) / segmentLength;
        samples.push({
          x: previous.x + ((current.x - previous.x) * ratio),
          y: previous.y + ((current.y - previous.y) * ratio)
        });
        break;
      }
      walked += segmentLength;
      segmentIndex += 1;
    }

    if (samples.length <= sampleIndex) {
      samples.push(points[points.length - 1]);
    }
  }

  return samples;
}

function distance(a, b) {
  return Math.hypot(a.x - b.x, a.y - b.y);
}

function pathLength(points) {
  let total = 0;
  for (let index = 1; index < points.length; index += 1) {
    total += distance(points[index - 1], points[index]);
  }
  return total;
}

function pointSpan(points) {
  if (points.length === 0) {
    return { width: 0, height: 0 };
  }

  const box = points.reduce((bounds, point) => ({
    minX: Math.min(bounds.minX, point.x),
    minY: Math.min(bounds.minY, point.y),
    maxX: Math.max(bounds.maxX, point.x),
    maxY: Math.max(bounds.maxY, point.y)
  }), {
    minX: points[0].x,
    minY: points[0].y,
    maxX: points[0].x,
    maxY: points[0].y
  });

  return {
    width: box.maxX - box.minX,
    height: box.maxY - box.minY
  };
}

function normalizedShapeDistance(actualPoints, expectedPoints) {
  const actual = normalizePoints(actualPoints);
  const expected = normalizePoints(expectedPoints);
  return actual.reduce((total, point, index) => total + distance(point, expected[index]), 0) / Math.max(actual.length, 1);
}

function normalizePoints(points) {
  const span = pointSpan(points);
  const scale = Math.max(span.width, span.height, 1);
  const center = points.reduce((total, point) => ({
    x: total.x + point.x,
    y: total.y + point.y
  }), { x: 0, y: 0 });
  center.x /= Math.max(points.length, 1);
  center.y /= Math.max(points.length, 1);

  return points.map((point) => ({
    x: (point.x - center.x) / scale,
    y: (point.y - center.y) / scale
  }));
}

function directionScore(first, last, expectedStart, expectedEnd) {
  const actual = {
    x: last.x - first.x,
    y: last.y - first.y
  };
  const expected = {
    x: expectedEnd.x - expectedStart.x,
    y: expectedEnd.y - expectedStart.y
  };
  const actualLength = Math.hypot(actual.x, actual.y) || 1;
  const expectedLength = Math.hypot(expected.x, expected.y) || 1;
  return ((actual.x / actualLength) * (expected.x / expectedLength)) + ((actual.y / actualLength) * (expected.y / expectedLength));
}

function completeLesson() {
  const lesson = currentLesson();
  const quality = evaluateWritingQuality(lesson);
  const resultType = quality >= DOUBLE_CIRCLE_SCORE ? "double" : "single";

  if (isWordLevel()) {
    const word = currentWord();
    if (state.wordCharIndex < word.kanaSequence.length - 1) {
      showResultMark(resultType);
      setMessage(resultType === "double" ? "とても きれい！ つぎの もじへ すすむよ" : "できた！ つぎの もじへ すすむよ", "good");
      scheduleAutoAdvance(() => {
        state.wordCharIndex += 1;
        resetCurrentWriting();
        if (isCustomTestActive()) {
          state.showTrace = true;
        }
        setMessage(`${state.wordCharIndex + 1}もじめを かいてみよう`, "normal");
        render();
      }, NEXT_CHAR_ADVANCE_DELAY);
      return;
    }

    const wordKey = lessonCompletionKey(word);
    if (isCustomTestActive()) {
      showResultMark(resultType, "テストOK！");
      setMessage(resultType === "double" ? "テストOK！ とても きれいに かけたよ" : "テストOK！ ただしく かけたよ", "good");
      scheduleAutoAdvance(restartCustomTestLesson, COMPLETE_ADVANCE_DELAY);
      return;
    }

    const goalReached = completionWillReachGoal(state.activeLevel, wordKey);
    state.completedWords.add(wordKey);
    saveCompletedWords();
    showResultMark(resultType, goalReached ? "れべるクリア！" : undefined);
    if (goalReached) {
      scheduleLevelClearAdvance();
      return;
    }

    const nextUnit = state.activeLevel === LEVELS.SENTENCE ? "ぶん" : "ことば";
    setMessage(resultType === "double" ? `とても きれい！ つぎの${nextUnit}へ すすむよ` : `できた！ つぎの${nextUnit}へ すすむよ`, "good");
    scheduleAutoAdvance(goNextLesson, COMPLETE_ADVANCE_DELAY);
    return;
  }

  if (state.activeLevel === LEVELS.FILL) {
    const fillKey = lessonCompletionKey(lesson);
    if (isCustomTestActive()) {
      showResultMark(resultType, "テストOK！");
      setMessage(resultType === "double" ? "テストOK！ とても きれいに かけたよ" : "テストOK！ ただしく かけたよ", "good");
      scheduleAutoAdvance(restartCustomTestLesson, COMPLETE_ADVANCE_DELAY);
      return;
    }

    const goalReached = completionWillReachGoal(state.activeLevel, fillKey);
    state.completedFillKana.add(fillKey);
    saveCompletedFillKana();
    showResultMark(resultType, goalReached ? "れべるクリア！" : undefined);
    if (goalReached) {
      scheduleLevelClearAdvance();
      return;
    }

    setMessage(resultType === "double" ? "とても きれい！ つぎの あなうめへ すすむよ" : "できた！ つぎの あなうめへ すすむよ", "good");
  } else {
    const goalReached = completionWillReachGoal(state.activeLevel, lesson.kana);
    state.completedKana.add(lesson.kana);
    saveCompletedKana();
    showResultMark(resultType, goalReached ? "れべるクリア！" : undefined);
    if (goalReached) {
      scheduleLevelClearAdvance();
      return;
    }

    setMessage(resultType === "double" ? "とても きれい！ つぎの もじへ すすむよ" : "できた！ つぎの もじへ すすむよ", "good");
  }
  scheduleAutoAdvance(goNextLesson, COMPLETE_ADVANCE_DELAY);
}

function scheduleLevelClearAdvance() {
  const nextLevel = nextLevelAfter(state.activeLevel);
  if (!nextLevel) {
    setMessage("ここまで できた！ おとなに みせよう", "good");
    return;
  }

  setMessage("れべるクリア！ つぎの れべるへ すすむよ", "good");
  scheduleAutoAdvance(() => selectLevel(nextLevel), LEVEL_CLEAR_ADVANCE_DELAY);
}

function isLessonComplete() {
  return state.currentStroke >= currentLesson().strokes.length;
}

function setMessage(message, tone = "normal") {
  statusMessage.textContent = message;
  state.messageTone = tone;
  statusMessage.classList.toggle("is-good", tone === "good");
  statusMessage.classList.toggle("is-alert", tone === "alert");
}

function showResultMark(type, label) {
  const isDouble = type === "double";
  resultMark.replaceChildren(createResultMarkSvg(isDouble));
  resultMark.setAttribute("aria-label", isDouble ? "にじゅうまる" : "まる");
  resultMark.classList.toggle("is-double", isDouble);
  resultMark.hidden = false;
  successBadge.textContent = label || (isDouble ? "とても きれい！" : "できた！");
  successBadge.hidden = false;
}

function createResultMarkSvg(isDouble) {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("viewBox", "0 0 120 120");
  svg.setAttribute("aria-hidden", "true");
  svg.setAttribute("focusable", "false");

  const outer = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  outer.setAttribute("class", "result-circle");
  outer.setAttribute("cx", "60");
  outer.setAttribute("cy", "60");
  outer.setAttribute("r", "44");
  outer.setAttribute("pathLength", "1");
  svg.append(outer);

  if (isDouble) {
    const inner = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    inner.setAttribute("class", "result-circle is-inner");
    inner.setAttribute("cx", "60");
    inner.setAttribute("cy", "60");
    inner.setAttribute("r", "25");
    inner.setAttribute("pathLength", "1");
    svg.append(inner);
  }

  return svg;
}

function hideResultFeedback() {
  resultMark.hidden = true;
  resultMark.classList.remove("is-double");
  resultMark.replaceChildren();
  successBadge.hidden = true;
}

function scheduleAutoAdvance(callback, delay = COMPLETE_ADVANCE_DELAY) {
  clearAutoAdvance();
  state.autoAdvanceCallback = callback;
  state.autoAdvanceTimer = window.setTimeout(() => {
    state.autoAdvanceTimer = 0;
    const next = state.autoAdvanceCallback;
    state.autoAdvanceCallback = null;
    if (typeof next === "function") {
      next();
    }
  }, delay);
}

function clearAutoAdvance() {
  if (state.autoAdvanceTimer) {
    window.clearTimeout(state.autoAdvanceTimer);
    state.autoAdvanceTimer = 0;
  }
  state.autoAdvanceCallback = null;
}

function renderPicture(lesson) {
  pictureEmoji.replaceChildren();
  pictureEmoji.classList.toggle("has-image", Boolean(lesson.imageId));

  if (lesson.imageId) {
    const imageUrl = state.imageUrls.get(lesson.imageId);
    if (imageUrl) {
      const image = document.createElement("img");
      image.src = imageUrl;
      image.alt = "";
      pictureEmoji.append(image);
      return;
    }

    pictureEmoji.textContent = "画像";
    ensureLessonImageLoaded(lesson.imageId);
    return;
  }

  pictureEmoji.textContent = lesson.picture || "🖼️";
}

function render() {
  const lesson = currentLesson();
  const complete = isLessonComplete();
  const revealTarget = state.activeLevel === LEVELS.TRACE || state.showTrace || complete;

  if (isWordLevel()) {
    const word = currentWord();
    promptLabel.textContent = state.activeLevel === LEVELS.SENTENCE ? "？に はいる もじ" : "えにあう ことば";
    renderPicture(word);
    pictureWord.textContent = wordProgressText();
  } else if (state.activeLevel === LEVELS.FILL) {
    const fill = currentFill();
    promptLabel.textContent = "えにあう もじ";
    renderPicture(fill);
    pictureWord.textContent = complete ? fill.word : maskWord(fill.word, fill.kana);
  } else {
    promptLabel.textContent = "じゅんばんに かこう";
    renderPicture(lesson);
    pictureWord.textContent = lesson.kana;
  }
  targetKana.setAttribute("aria-label", revealTarget ? lesson.kana : "ひんとなし");
  targetKana.replaceChildren(revealTarget ? createKanaSampleSvg(lesson) : createTargetPlaceholder());
  scoreText.textContent = scoreTextForLevel();
  renderHintControl();
  menuToggleButton.textContent = state.menuPanelOpen ? "とじる" : "メニュー";
  menuToggleButton.setAttribute("aria-label", state.menuPanelOpen ? "メニューをとじる" : "メニューをひらく");
  menuToggleButton.setAttribute("aria-expanded", String(state.menuPanelOpen));
  menuToggleButton.classList.toggle("is-open", state.menuPanelOpen);
  levelPanel.hidden = !state.menuPanelOpen;
  stageToggleButton.textContent = state.stageListOpen ? "もじをとじる" : "もじをえらぶ";
  stageToggleButton.hidden = state.activeLevel !== LEVELS.TRACE;
  adultPanel.hidden = !state.menuPanelOpen || !state.adultPanelOpen;
  adultToggleButton.setAttribute("aria-expanded", String(state.menuPanelOpen && state.adultPanelOpen));
  adultToggleButton.classList.toggle("is-open", state.menuPanelOpen && state.adultPanelOpen);

  renderStrokeList(lesson);
  renderStageStrip();
  renderLevelPanel();
  renderAdultPanel();

  if (!complete && state.messageTone === "normal") {
    setMessage(defaultWritingMessage(), "normal");
  } else {
    statusMessage.classList.toggle("is-good", state.messageTone === "good");
    statusMessage.classList.toggle("is-alert", state.messageTone === "alert");
  }

  drawBoard();
}

function defaultWritingMessage() {
  if (state.activeLevel === LEVELS.TRACE) {
    return `${state.currentStroke + 1}かくめを、まるから おてほんに そって なぞろう`;
  }

  if (state.showTrace) {
    return `ひんとを みながら、${state.currentStroke + 1}かくめを かこう`;
  }

  return state.activeLevel === LEVELS.SENTENCE ? "？に はいる もじを かこう" : "えと ことばを みて、かいてみよう";
}

function renderHintControl() {
  hintButton.disabled = true;
  if (state.activeLevel === LEVELS.TRACE) {
    hintButton.textContent = "おてほんせん あり";
  } else if (state.showTrace) {
    hintButton.textContent = "ひんと あり";
  } else {
    hintButton.textContent = `ひんとなし ${state.missCount}/${AUTO_HINT_MISS_COUNT}`;
  }
}

function maskWord(word, kana) {
  const index = word.indexOf(kana);
  if (index < 0) {
    return "？";
  }

  return `${word.slice(0, index)}？${word.slice(index + kana.length)}`;
}

function wordProgressText() {
  if (state.activeLevel === LEVELS.SENTENCE) {
    return sentenceProgressText();
  }

  const word = currentWord();
  if (isWordComplete()) {
    return word.word;
  }

  const revealedLength = state.wordCharIndex + (isLessonComplete() ? 1 : 0);
  return word.kanaSequence
    .map((kana, index) => (index < revealedLength ? kana : "？"))
    .join("");
}

function sentenceProgressText() {
  const word = currentWord();
  const revealedLength = state.wordCharIndex + (isLessonComplete() ? 1 : 0);
  const answer = word.kanaSequence
    .map((kana, index) => (index < revealedLength ? kana : "？"))
    .join("");
  return `${word.prefix}${answer}${word.suffix || ""}`;
}

function scoreTextForLevel() {
  const goal = levelGoal();
  return `${Math.min(completedCountForLevel(), goal)} / ${goal}`;
}

function renderCustomEditor() {
  if (!customEditorButton || !customLessonPanel) {
    return;
  }

  customEditorButton.textContent = state.customEditorOpen ? "追加をとじる" : "問題を追加";
  customEditorButton.setAttribute("aria-expanded", String(state.customEditorOpen));
  customLessonPanel.hidden = !state.customEditorOpen;
}

function renderQuestionList() {
  if (!questionListButton || !questionListPanel || !questionListBody) {
    return;
  }

  questionListButton.textContent = state.questionListOpen ? "問題一覧をとじる" : "問題一覧をひらく";
  questionListButton.setAttribute("aria-expanded", String(state.questionListOpen));
  questionListPanel.hidden = !state.questionListOpen;
  questionListBody.replaceChildren();

  if (!state.questionListOpen) {
    return;
  }

  renderQuestionFilters();
  const allRows = questionListRows();
  const rows = filterQuestionRows(allRows);
  if (questionFilterCount) {
    questionFilterCount.textContent = `${rows.length} / ${allRows.length}件`;
  }

  if (rows.length === 0) {
    const tr = document.createElement("tr");
    const cell = document.createElement("td");
    cell.colSpan = 6;
    cell.textContent = "該当する問題はありません。";
    tr.append(cell);
    questionListBody.append(tr);
    return;
  }

  rows.forEach((row) => {
    const tr = document.createElement("tr");
    addQuestionCell(tr, row.level);
    addQuestionPictureCell(tr, row);
    addQuestionCell(tr, row.prompt);
    addQuestionCell(tr, row.answer);
    addQuestionCell(tr, row.writing, "writing-cell");
    addQuestionActionCell(tr, row);
    questionListBody.append(tr);
  });
}

function renderQuestionFilters() {
  if (questionFilterLevel) {
    questionFilterLevel.value = state.questionFilterLevel;
  }
  if (questionFilterSource) {
    questionFilterSource.value = state.questionFilterSource;
  }
  if (questionFilterText) {
    questionFilterText.value = state.questionFilterText;
  }
}

function filterQuestionRows(rows) {
  const level = state.questionFilterLevel;
  const source = state.questionFilterSource;
  const text = normalizeSearchText(state.questionFilterText);
  return rows.filter((row) => {
    const levelMatch = level === "all" || row.levelId === level;
    const sourceMatch = source === "all" || row.sourceKey === source;
    const textMatch = !text || normalizeSearchText([
      row.level,
      row.picture,
      row.prompt,
      row.answer,
      row.writing,
      row.source
    ].join(" ")).includes(text);
    return levelMatch && sourceMatch && textMatch;
  });
}

function normalizeSearchText(text) {
  return String(text || "").trim().normalize("NFC").toLowerCase();
}

function questionListRows() {
  const rows = [];

  lessons.forEach((lesson) => {
    rows.push({
      levelId: LEVELS.TRACE,
      level: LEVEL_NAMES[LEVELS.TRACE],
      picture: lesson.picture,
      prompt: lesson.word,
      answer: lesson.kana,
      writing: lesson.kana,
      source: "標準",
      sourceKey: "standard"
    });
  });

  currentFillSet().forEach((lesson) => {
    const isCustom = lesson.source === "custom";
    rows.push({
      levelId: LEVELS.FILL,
      level: LEVEL_NAMES[LEVELS.FILL],
      picture: lesson.picture,
      imageId: lesson.imageId,
      prompt: maskWord(lesson.word, lesson.kana),
      answer: lesson.kana,
      writing: lesson.kana,
      source: isCustom ? "追加" : "標準",
      sourceKey: isCustom ? "custom" : "standard",
      customId: isCustom ? lesson.id : ""
    });
  });

  addWordQuestionRows(rows, LEVELS.WORD, currentWordSet(LEVELS.WORD));
  addWordQuestionRows(rows, LEVELS.DAKUTEN, currentWordSet(LEVELS.DAKUTEN));
  addWordQuestionRows(rows, LEVELS.SMALL, currentWordSet(LEVELS.SMALL));
  addWordQuestionRows(rows, LEVELS.LONG, currentWordSet(LEVELS.LONG));

  currentWordSet(LEVELS.SENTENCE).forEach((lesson) => {
    const isCustom = lesson.source === "custom";
    const answer = lesson.kanaSequence.join("");
    rows.push({
      levelId: LEVELS.SENTENCE,
      level: LEVEL_NAMES[LEVELS.SENTENCE],
      picture: lesson.picture,
      imageId: lesson.imageId,
      prompt: `${lesson.prefix}？${lesson.suffix || ""}`,
      answer,
      writing: lesson.kanaSequence.join(" "),
      source: isCustom ? "追加" : "標準",
      sourceKey: isCustom ? "custom" : "standard",
      customId: isCustom ? lesson.id : ""
    });
  });

  return rows;
}

function addWordQuestionRows(rows, level, wordSet) {
  wordSet.forEach((lesson) => {
    const isCustom = lesson.source === "custom";
    rows.push({
      levelId: level,
      level: LEVEL_NAMES[level],
      picture: lesson.picture,
      imageId: lesson.imageId,
      prompt: lesson.word,
      answer: lesson.word,
      writing: lesson.kanaSequence.join(" "),
      source: isCustom ? "追加" : "標準",
      sourceKey: isCustom ? "custom" : "standard",
      customId: isCustom ? lesson.id : ""
    });
  });
}

function addQuestionPictureCell(row, data) {
  const cell = document.createElement("td");
  cell.className = "picture-cell";

  if (data.imageId) {
    const imageUrl = state.imageUrls.get(data.imageId);
    if (imageUrl) {
      const image = document.createElement("img");
      image.src = imageUrl;
      image.alt = "";
      cell.append(image);
    } else {
      cell.textContent = "画像";
      ensureLessonImageLoaded(data.imageId);
    }
  } else {
    cell.textContent = data.picture || "";
  }

  row.append(cell);
}

function addQuestionCell(row, text, className = "") {
  const cell = document.createElement("td");
  cell.textContent = text;
  if (className) {
    cell.className = className;
  }
  row.append(cell);
}

function addQuestionActionCell(row, data) {
  const cell = document.createElement("td");
  if (data.customId) {
    cell.className = "question-action-cell";
    const actions = document.createElement("div");
    actions.className = "action-buttons";

    const testButton = document.createElement("button");
    testButton.type = "button";
    testButton.className = "inline-test-button";
    testButton.textContent = "テスト";
    testButton.addEventListener("click", () => startCustomLessonTest(data.customId));

    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.className = "inline-delete-button";
    deleteButton.textContent = "削除";
    deleteButton.addEventListener("click", () => deleteCustomLesson(data.customId));
    actions.append(testButton, deleteButton);
    cell.append(actions);
  } else {
    cell.className = "source-cell";
    cell.textContent = data.source || "標準";
  }

  row.append(cell);
}

function normalizeKanaText(text) {
  return String(text || "").trim().normalize("NFC");
}

function splitKanaUnits(text) {
  return Array.from(normalizeKanaText(text));
}

function unsupportedKana(kanaSequence) {
  return [...new Set(kanaSequence.filter((kana) => !lessonByKana.has(kana)))];
}

function setCustomLessonMessage(text, tone = "normal") {
  if (!customLessonMessage) {
    return;
  }

  customLessonMessage.textContent = text;
  customLessonMessage.classList.toggle("is-alert", tone === "alert");
  customLessonMessage.classList.toggle("is-good", tone === "good");
}

function setAdultDataMessage(text, tone = "normal") {
  if (!adultDataMessage) {
    return;
  }

  adultDataMessage.textContent = text;
  adultDataMessage.classList.toggle("is-alert", tone === "alert");
  adultDataMessage.classList.toggle("is-good", tone === "good");
}

function clearCustomLessonForm() {
  if (customAnswerInput) {
    customAnswerInput.value = "";
  }
  if (customPromptInput) {
    customPromptInput.value = "";
  }
  if (customImageInput) {
    customImageInput.value = "";
  }
  clearCustomImagePreview();
}

function clearCustomImagePreview() {
  if (state.customImagePreviewUrl) {
    URL.revokeObjectURL(state.customImagePreviewUrl);
    state.customImagePreviewUrl = "";
  }
  if (customImagePreview) {
    customImagePreview.removeAttribute("src");
    customImagePreview.hidden = true;
  }
}

function handleCustomImageChange() {
  clearCustomImagePreview();
  const file = customImageInput?.files?.[0];
  if (!file) {
    return;
  }

  if (!file.type.startsWith("image/")) {
    setCustomLessonMessage("画像ファイルを選んでください。", "alert");
    customImageInput.value = "";
    return;
  }

  state.customImagePreviewUrl = URL.createObjectURL(file);
  customImagePreview.src = state.customImagePreviewUrl;
  customImagePreview.hidden = false;
  setCustomLessonMessage("画像を読み込みました。", "normal");
}

async function handleCustomLessonSubmit(event) {
  event.preventDefault();
  const result = buildCustomLessonDraft();
  if (!result.ok) {
    setCustomLessonMessage(result.message, "alert");
    return;
  }

  try {
    setCustomLessonMessage("保存しています。", "normal");
    const imageBlob = await prepareImageBlob(result.file);
    await saveImageBlob(result.lesson.imageId, imageBlob);
    cacheImageBlob(result.lesson.imageId, imageBlob);
    state.customLessons.push(result.lesson);
    saveCustomLessons();
    refreshCurrentLessonAfterCustomChange(result.lesson.level);
    clearCustomLessonForm();
    state.questionListOpen = true;
    setCustomLessonMessage("追加しました。問題一覧で確認できます。", "good");
    render();
  } catch (error) {
    setCustomLessonMessage("画像を保存できませんでした。別の画像で試してください。", "alert");
  }
}

function buildCustomLessonDraft() {
  const level = customLevelSelect?.value || LEVELS.WORD;
  const answer = normalizeKanaText(customAnswerInput?.value || "");
  const prompt = normalizeKanaText(customPromptInput?.value || "");
  const file = customImageInput?.files?.[0];

  if (![LEVELS.FILL, LEVELS.WORD, LEVELS.DAKUTEN, LEVELS.SMALL, LEVELS.LONG, LEVELS.SENTENCE].includes(level)) {
    return { ok: false, message: "追加できるレベルを選んでください。" };
  }

  if (!answer) {
    return { ok: false, message: "こたえを入力してください。" };
  }

  if (!file || !file.type.startsWith("image/")) {
    return { ok: false, message: "絵画像を選んでください。" };
  }

  const kanaSequence = splitKanaUnits(answer);
  const missing = unsupportedKana(kanaSequence);
  if (missing.length > 0) {
    return { ok: false, message: `まだ書き順がない文字があります: ${missing.join("、")}` };
  }

  const id = `custom-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
  const imageId = `image-${id}`;
  const lesson = {
    id,
    key: `custom:${id}`,
    source: "custom",
    level,
    word: answer,
    picture: "画像",
    imageId,
    kanaSequence
  };

  if (level === LEVELS.FILL) {
    lesson.kana = kanaSequence[0];
  }

  if (level === LEVELS.SENTENCE) {
    const markerCount = Array.from(prompt).filter((char) => char === "？").length;
    if (markerCount !== 1) {
      return { ok: false, message: "レベル6は、問題文に「？」を1つ入れてください。" };
    }
    if (kanaSequence.length !== 1) {
      return { ok: false, message: "レベル6のこたえは1文字にしてください。" };
    }
    const [prefix, suffix] = prompt.split("？");
    lesson.prefix = prefix;
    lesson.suffix = suffix || "";
    lesson.word = `${prefix}${answer}${suffix || ""}`;
    lesson.phase = 1;
  }

  return { ok: true, lesson, file };
}

function refreshCurrentLessonAfterCustomChange(level) {
  if (state.activeLevel !== level) {
    return;
  }

  if (level === LEVELS.FILL) {
    state.fillIndex = Math.min(state.fillIndex, currentFillSet().length - 1);
  } else if (isWordLevel(level)) {
    state.wordIndex = Math.min(state.wordIndex, currentWordSet(level).length - 1);
    state.wordCharIndex = 0;
  }
  resetCurrentWriting();
}

function isCustomTestActive() {
  return Boolean(state.customTestId);
}

function startCustomLessonTest(id) {
  const lesson = state.customLessons.find((item) => item.id === id);
  if (!lesson) {
    setCustomLessonMessage("テストする問題が見つかりません。", "alert");
    return;
  }

  const lessonSet = lesson.level === LEVELS.FILL ? currentFillSet() : currentWordSet(lesson.level);
  const index = lessonSet.findIndex((item) => item.id === id);
  if (index < 0) {
    setCustomLessonMessage("この問題は出題データに入っていません。", "alert");
    return;
  }

  clearAutoAdvance();
  state.activeLevel = lesson.level;
  state.customTestId = id;
  state.stageListOpen = false;
  state.adultPanelOpen = true;
  state.questionListOpen = true;

  if (lesson.level === LEVELS.FILL) {
    state.fillIndex = index;
    state.wordCharIndex = 0;
  } else {
    state.wordIndex = index;
    state.wordCharIndex = 0;
  }

  resetCurrentWriting();
  state.showTrace = true;
  setCustomLessonMessage(`「${lesson.word}」をテスト中です。`, "good");
  setMessage("テスト中。ひんとを みながら かいてみよう", "normal");
  render();
}

function restartCustomTestLesson() {
  if (!state.customTestId) {
    return;
  }

  state.wordCharIndex = 0;
  resetCurrentWriting();
  state.showTrace = true;
  setMessage("テスト中。もういちど かいてみよう", "normal");
  render();
}

async function deleteCustomLesson(id) {
  const lesson = state.customLessons.find((item) => item.id === id);
  if (!lesson) {
    return;
  }

  if (!window.confirm(`追加した問題「${lesson.word}」を削除しますか？`)) {
    return;
  }

  if (state.customTestId === id) {
    state.customTestId = "";
  }
  state.customLessons = state.customLessons.filter((item) => item.id !== id);
  saveCustomLessons();
  state.completedFillKana.delete(lessonCompletionKey(lesson));
  state.completedWords.delete(lessonCompletionKey(lesson));
  saveCompletedFillKana();
  saveCompletedWords();
  if (lesson.imageId) {
    await deleteImageBlob(lesson.imageId);
    releaseCachedImage(lesson.imageId);
  }
  refreshCurrentLessonAfterCustomChange(lesson.level);
  setCustomLessonMessage("削除しました。", "good");
  render();
}

let imageDbPromise = null;

function openImageDb() {
  if (!window.indexedDB) {
    return Promise.reject(new Error("IndexedDB is not available."));
  }

  if (imageDbPromise) {
    return imageDbPromise;
  }

  imageDbPromise = new Promise((resolve, reject) => {
    const request = window.indexedDB.open(IMAGE_DB_NAME, 1);
    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(IMAGE_STORE_NAME)) {
        db.createObjectStore(IMAGE_STORE_NAME);
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });

  return imageDbPromise;
}

function imageStoreOperation(mode, action) {
  return openImageDb().then((db) => new Promise((resolve, reject) => {
    const transaction = db.transaction(IMAGE_STORE_NAME, mode);
    const store = transaction.objectStore(IMAGE_STORE_NAME);
    const request = action(store);
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  }));
}

function saveImageBlob(imageId, blob) {
  return imageStoreOperation("readwrite", (store) => store.put(blob, imageId));
}

function getImageBlob(imageId) {
  return imageStoreOperation("readonly", (store) => store.get(imageId));
}

function deleteImageBlob(imageId) {
  return imageStoreOperation("readwrite", (store) => store.delete(imageId)).catch(() => undefined);
}

function cacheImageBlob(imageId, blob) {
  releaseCachedImage(imageId);
  state.imageUrls.set(imageId, URL.createObjectURL(blob));
  state.missingImageIds.delete(imageId);
}

function releaseCachedImage(imageId) {
  const imageUrl = state.imageUrls.get(imageId);
  if (imageUrl) {
    URL.revokeObjectURL(imageUrl);
    state.imageUrls.delete(imageId);
  }
  state.loadingImageIds.delete(imageId);
  state.missingImageIds.delete(imageId);
}

function ensureLessonImageLoaded(imageId) {
  if (!imageId || state.imageUrls.has(imageId) || state.loadingImageIds.has(imageId) || state.missingImageIds.has(imageId)) {
    return;
  }

  state.loadingImageIds.add(imageId);
  getImageBlob(imageId)
    .then((blob) => {
      if (blob) {
        cacheImageBlob(imageId, blob);
        render();
      } else {
        state.missingImageIds.add(imageId);
      }
    })
    .catch(() => {
      state.missingImageIds.add(imageId);
    })
    .finally(() => {
      state.loadingImageIds.delete(imageId);
    });
}

function loadCustomLessonImages() {
  return Promise.all(
    state.customLessons
      .map((lesson) => lesson.imageId)
      .filter(Boolean)
      .map((imageId) => getImageBlob(imageId)
        .then((blob) => {
          if (blob) {
            cacheImageBlob(imageId, blob);
          } else {
            state.missingImageIds.add(imageId);
          }
        })
        .catch(() => {
          state.missingImageIds.add(imageId);
        }))
  );
}

async function exportCustomLessons() {
  if (state.customLessons.length === 0) {
    setAdultDataMessage("書き出す追加問題がありません。", "alert");
    return;
  }

  try {
    setAdultDataMessage("追加問題を書き出しています。", "normal");
    const lessons = await Promise.all(state.customLessons.map(async (lesson) => {
      const imageBlob = await getImageBlob(lesson.imageId).catch(() => null);
      return {
        lesson: customLessonForExport(lesson),
        image: imageBlob
          ? {
              type: imageBlob.type || "image/webp",
              dataUrl: await blobToDataUrl(imageBlob)
            }
          : null
      };
    }));
    const exportData = {
      app: "hiragana-eawase",
      version: CUSTOM_EXPORT_VERSION,
      exportedAt: new Date().toISOString(),
      lessons
    };
    const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: "application/json" });
    downloadBlob(blob, `hiragana-eawase-custom-${dateStamp()}.json`);
    setAdultDataMessage(`${state.customLessons.length}件の追加問題を書き出しました。`, "good");
  } catch (error) {
    setAdultDataMessage("追加問題を書き出せませんでした。", "alert");
  }
}

function customLessonForExport(lesson) {
  const exported = {
    id: lesson.id,
    key: lesson.key,
    source: "custom",
    level: lesson.level,
    word: lesson.word,
    picture: lesson.picture,
    imageId: lesson.imageId,
    kanaSequence: [...lesson.kanaSequence]
  };

  if (lesson.level === LEVELS.FILL) {
    exported.kana = lesson.kana;
  }

  if (lesson.level === LEVELS.SENTENCE) {
    exported.prefix = lesson.prefix || "";
    exported.suffix = lesson.suffix || "";
    exported.phase = lesson.phase || 1;
  }

  return exported;
}

function blobToDataUrl(blob) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(blob);
  });
}

function dataUrlToBlob(dataUrl) {
  const [metadata, content] = String(dataUrl || "").split(",");
  const match = metadata?.match(/^data:([^;]+);base64$/);
  if (!match || !content) {
    throw new Error("Invalid image data.");
  }

  const binary = atob(content);
  const bytes = new Uint8Array(binary.length);
  for (let index = 0; index < binary.length; index += 1) {
    bytes[index] = binary.charCodeAt(index);
  }

  return new Blob([bytes], { type: match[1] || "image/webp" });
}

function downloadBlob(blob, filename) {
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.append(link);
  link.click();
  link.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 1000);
}

function dateStamp() {
  const now = new Date();
  const pad = (value) => String(value).padStart(2, "0");
  return `${now.getFullYear()}${pad(now.getMonth() + 1)}${pad(now.getDate())}`;
}

function openCustomLessonImport() {
  if (!importCustomLessonsInput) {
    return;
  }

  importCustomLessonsInput.value = "";
  importCustomLessonsInput.click();
}

async function handleCustomLessonsImport() {
  const file = importCustomLessonsInput?.files?.[0];
  if (!file) {
    return;
  }

  try {
    setAdultDataMessage("追加問題を読み込んでいます。", "normal");
    const data = JSON.parse(await file.text());
    const result = await importCustomLessonPackage(data);
    const message = [
      `${result.added}件を読み込みました`,
      result.skipped ? `${result.skipped}件は重複のためスキップ` : "",
      result.failed ? `${result.failed}件は読み込めませんでした` : ""
    ].filter(Boolean).join("。");
    setAdultDataMessage(message || "読み込みました。", result.failed ? "alert" : "good");
    state.questionListOpen = true;
    render();
  } catch (error) {
    setAdultDataMessage("追加問題ファイルを読み込めませんでした。", "alert");
  } finally {
    importCustomLessonsInput.value = "";
  }
}

async function importCustomLessonPackage(data) {
  if (!data || data.app !== "hiragana-eawase" || !Array.isArray(data.lessons)) {
    throw new Error("Unsupported import data.");
  }

  const existingKeys = new Set(state.customLessons.map((lesson) => lessonCompletionKey(lesson)));
  const result = { added: 0, skipped: 0, failed: 0 };

  for (const item of data.lessons) {
    try {
      const lesson = normalizeCustomLesson(item.lesson || item);
      const imageDataUrl = item.image?.dataUrl;
      if (!lesson || !imageDataUrl || unsupportedKana(lesson.kanaSequence).length > 0) {
        result.failed += 1;
        continue;
      }

      if (existingKeys.has(lessonCompletionKey(lesson))) {
        result.skipped += 1;
        continue;
      }

      const imageBlob = dataUrlToBlob(imageDataUrl);
      await saveImageBlob(lesson.imageId, imageBlob);
      cacheImageBlob(lesson.imageId, imageBlob);
      state.customLessons.push(lesson);
      existingKeys.add(lessonCompletionKey(lesson));
      result.added += 1;
    } catch {
      result.failed += 1;
    }
  }

  if (result.added > 0) {
    saveCustomLessons();
    refreshCurrentLessonAfterCustomChange(state.activeLevel);
  }

  return result;
}

function prepareImageBlob(file) {
  return new Promise((resolve, reject) => {
    const imageUrl = URL.createObjectURL(file);
    const image = new Image();
    image.onload = () => {
      const scale = Math.min(1, CUSTOM_IMAGE_MAX_SIZE / Math.max(image.naturalWidth, image.naturalHeight));
      const width = Math.max(1, Math.round(image.naturalWidth * scale));
      const height = Math.max(1, Math.round(image.naturalHeight * scale));
      const canvasElement = document.createElement("canvas");
      canvasElement.width = width;
      canvasElement.height = height;
      const canvasContext = canvasElement.getContext("2d");
      canvasContext.drawImage(image, 0, 0, width, height);
      canvasElement.toBlob((blob) => {
        URL.revokeObjectURL(imageUrl);
        if (blob) {
          resolve(blob);
        } else {
          resolve(file);
        }
      }, "image/webp", 0.86);
    };
    image.onerror = () => {
      URL.revokeObjectURL(imageUrl);
      reject(new Error("Image could not be loaded."));
    };
    image.src = imageUrl;
  });
}

function renderAdultPanel() {
  if (!adultSummary || !struggleList) {
    return;
  }

  adultSummary.replaceChildren();
  struggleList.replaceChildren();

  const missCount = state.struggleLog.length;
  const hintCount = state.struggleLog.filter((entry) => entry.hintShown).length;
  const summaryLines = [
    `つまずき記録: ${missCount}回`,
    `ヒント表示: ${hintCount}回`,
    `現在: ${LEVEL_NAMES[state.activeLevel]} / ${currentPracticeLabel()}`,
    `目標: ${Math.min(completedCountForLevel(), levelGoal())} / ${levelGoal()}`
  ];

  summaryLines.forEach((text) => {
    const item = document.createElement("p");
    item.textContent = text;
    adultSummary.append(item);
  });

  renderQuestionList();
  renderCustomEditor();

  const topItems = topStruggles();
  if (topItems.length === 0) {
    const item = document.createElement("li");
    item.textContent = "まだつまずき記録はありません。";
    struggleList.append(item);
    return;
  }

  topItems.forEach((item) => {
    const row = document.createElement("li");
    row.textContent = `「${item.kana}」 ${item.count}回 - ${item.reason} / ${item.task}`;
    struggleList.append(row);
  });
}

function topStruggles() {
  const byKana = new Map();
  state.struggleLog.forEach((entry) => {
    const key = entry.kana || "?";
    const current = byKana.get(key) || {
      kana: key,
      count: 0,
      task: entry.task || key,
      reasons: new Map()
    };
    current.count += 1;
    current.task = entry.task || current.task;
    const reasonLabel = MISS_REASON_LABELS[entry.reason] || MISS_REASON_LABELS.unknown;
    current.reasons.set(reasonLabel, (current.reasons.get(reasonLabel) || 0) + 1);
    byKana.set(key, current);
  });

  return [...byKana.values()]
    .map((item) => ({
      ...item,
      reason: [...item.reasons.entries()].sort((a, b) => b[1] - a[1])[0]?.[0] || MISS_REASON_LABELS.unknown
    }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 5);
}

function renderLevelPanel() {
  levelZeroButton.classList.toggle("is-active", state.activeLevel === LEVELS.TRACE);
  levelOneButton.classList.toggle("is-active", state.activeLevel === LEVELS.FILL);
  levelTwoButton.classList.toggle("is-active", state.activeLevel === LEVELS.WORD);
  levelThreeButton.classList.toggle("is-active", state.activeLevel === LEVELS.DAKUTEN);
  levelFourButton.classList.toggle("is-active", state.activeLevel === LEVELS.SMALL);
  levelFiveButton.classList.toggle("is-active", state.activeLevel === LEVELS.LONG);
  levelSixButton.classList.toggle("is-active", state.activeLevel === LEVELS.SENTENCE);
  levelSixButton.classList.toggle("is-locked", FROZEN_LEVELS.has(LEVELS.SENTENCE));
  levelSixButton.setAttribute("aria-disabled", String(FROZEN_LEVELS.has(LEVELS.SENTENCE)));

  if (state.activeLevel === LEVELS.SENTENCE) {
    levelStatusText.textContent = "ぶんを つなぐ 1もじを れんしゅう";
  } else if (state.activeLevel === LEVELS.LONG) {
    levelStatusText.textContent = "3もじ いじょうの ことばを れんしゅう";
  } else if (state.activeLevel === LEVELS.SMALL) {
    levelStatusText.textContent = "ちいさい もじの ことばを れんしゅう";
  } else if (state.activeLevel === LEVELS.DAKUTEN) {
    levelStatusText.textContent = "てんてん・まるの ことばを れんしゅう";
  } else if (state.activeLevel === LEVELS.WORD) {
    levelStatusText.textContent = "2もじの ことばを れんしゅう";
  } else if (state.activeLevel === LEVELS.FILL) {
    levelStatusText.textContent = "えと あなうめを みて、1もじを れんしゅう";
  } else {
    levelStatusText.textContent = "あ〜んを じゅんばんに、おてほんせん ありで れんしゅう";
  }
}

function createKanaSampleSvg(lesson, className = "kana-sample") {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("class", className);
  svg.setAttribute("viewBox", `0 0 ${KANJIVG_VIEWBOX_SIZE} ${KANJIVG_VIEWBOX_SIZE}`);
  svg.setAttribute("aria-hidden", "true");
  svg.setAttribute("focusable", "false");

  lesson.strokes.forEach((stroke) => {
    if (!stroke.pathD) {
      return;
    }

    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", stroke.pathD);
    if (stroke.transform) {
      path.setAttribute("transform", `translate(${stroke.transform.x} ${stroke.transform.y}) scale(${stroke.transform.scale})`);
    }
    svg.append(path);
  });

  return svg;
}

function createTargetPlaceholder() {
  const placeholder = document.createElement("span");
  placeholder.className = "target-placeholder";
  placeholder.textContent = "？";
  return placeholder;
}

function renderStrokeList(lesson) {
  strokeList.innerHTML = "";
  strokeList.hidden = state.activeLevel !== LEVELS.TRACE && !state.showTrace && !isLessonComplete();
  if (strokeList.hidden) {
    return;
  }

  lesson.strokes.forEach((stroke, index) => {
    const item = document.createElement("li");
    item.classList.toggle("is-current", index === state.currentStroke && !isLessonComplete());
    item.classList.toggle("is-done", index < state.currentStroke);

    const number = document.createElement("span");
    number.className = "num";
    number.textContent = String(index + 1);

    const label = document.createElement("span");
    label.textContent = stroke.label;

    item.append(number, label);
    strokeList.append(item);
  });
}

function renderStageStrip() {
  stageStrip.innerHTML = "";
  stageStrip.hidden = !state.stageListOpen || state.activeLevel !== LEVELS.TRACE;
  if (stageStrip.hidden) {
    return;
  }

  lessons.forEach((lesson, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "stage-button";
    button.classList.toggle("is-active", index === state.lessonIndex);
    button.classList.toggle("is-complete", state.completedKana.has(lesson.kana));
    button.setAttribute("aria-label", `${lesson.kana} のもんだい`);
    button.append(createKanaSampleSvg(lesson, "kana-sample stage-kana-svg"));
    if (state.completedKana.has(lesson.kana)) {
      const check = document.createElement("span");
      check.className = "stage-check";
      check.textContent = "✓";
      button.append(check);
    }
    button.addEventListener("click", () => selectLesson(index));
    stageStrip.append(button);
  });
}

function selectLesson(index) {
  state.activeLevel = LEVELS.TRACE;
  state.customTestId = "";
  state.lessonIndex = index;
  state.wordCharIndex = 0;
  state.stageListOpen = false;
  resetCurrentWriting();
  setMessage("1かくめを、まるから おてほんに そって なぞろう", "normal");
  render();
}

function resetCurrentWriting() {
  clearAutoAdvance();
  state.currentStroke = 0;
  state.completedStrokes = [];
  state.liveStroke = [];
  state.drawing = false;
  state.missCount = 0;
  state.showTrace = state.activeLevel === LEVELS.TRACE;
  hideResultFeedback();
}

function goNextLesson() {
  clearAutoAdvance();
  if (isCustomTestActive()) {
    restartCustomTestLesson();
    return;
  }

  if (isWordLevel()) {
    state.wordIndex = nextWordIndex();
    state.wordCharIndex = 0;
    resetCurrentWriting();
    setMessage(wordLevelStartMessage(), "normal");
    render();
    return;
  }

  if (state.activeLevel === LEVELS.FILL) {
    state.fillIndex = nextFillIndex();
    resetCurrentWriting();
    setMessage("えと ことばを みて、かいてみよう", "normal");
    render();
    return;
  }

  const nextIndex = (state.lessonIndex + 1) % lessons.length;
  selectLesson(nextIndex);
}

function selectLevel(level) {
  if (FROZEN_LEVELS.has(level)) {
    clearAutoAdvance();
    setMessage("このれべるは じゅんびちゅうだよ", "alert");
    renderLevelPanel();
    return;
  }

  if (state.activeLevel === level) {
    closeMenuAfterCompactChoice();
    render();
    return;
  }

  state.activeLevel = level;
  state.customTestId = "";
  state.stageListOpen = false;

  if (isWordLevel(level)) {
    state.wordQueue = [];
    state.lastWordIndex = -1;
    state.wordIndex = nextWordIndex();
    state.wordCharIndex = 0;
    resetCurrentWriting();
    setMessage(wordLevelStartMessage(), "normal");
  } else if (level === LEVELS.FILL) {
    state.fillIndex = nextFillIndex();
    state.wordCharIndex = 0;
    resetCurrentWriting();
    setMessage("えと あなうめを みて、1もじを かいてみよう", "normal");
  } else {
    state.wordCharIndex = 0;
    state.lessonIndex = 0;
    resetCurrentWriting();
    setMessage("1かくめを、まるから おてほんに そって なぞろう", "normal");
  }

  closeMenuAfterCompactChoice();
  render();
}

function closeMenuAfterCompactChoice() {
  if (!compactMenuMedia.matches) {
    return;
  }

  state.menuPanelTouched = true;
  state.menuPanelOpen = false;
  state.adultPanelOpen = false;
}

function wordLevelStartMessage() {
  switch (state.activeLevel) {
    case LEVELS.DAKUTEN:
      return "てんてん・まるの ことばを かいてみよう";
    case LEVELS.SMALL:
      return "ちいさい もじの ことばを かいてみよう";
    case LEVELS.LONG:
      return "3もじ いじょうの ことばを かいてみよう";
    case LEVELS.SENTENCE:
      return "？に はいる つなぎもじを かいてみよう";
    case LEVELS.WORD:
    default:
      return "えを みて、2もじの ことばを かいてみよう";
  }
}

function toggleMenuPanel() {
  state.menuPanelTouched = true;
  state.menuPanelOpen = !state.menuPanelOpen;

  if (!state.menuPanelOpen) {
    state.adultPanelOpen = false;
  }

  render();
}

function toggleStageList() {
  if (state.activeLevel !== LEVELS.TRACE) {
    return;
  }

  state.stageListOpen = !state.stageListOpen;
  render();
}

function toggleAdultPanel() {
  state.menuPanelTouched = true;

  if (!state.menuPanelOpen) {
    state.menuPanelOpen = true;
    state.adultPanelOpen = true;
  } else {
    state.adultPanelOpen = !state.adultPanelOpen;
  }

  render();
}

function toggleCustomEditor() {
  state.customEditorOpen = !state.customEditorOpen;
  render();
}

function toggleQuestionList() {
  state.questionListOpen = !state.questionListOpen;
  render();
}

function updateQuestionFilters() {
  state.questionFilterLevel = questionFilterLevel?.value || "all";
  state.questionFilterSource = questionFilterSource?.value || "all";
  state.questionFilterText = questionFilterText?.value || "";
  render();
}

function resetQuestionFilters() {
  state.questionFilterLevel = "all";
  state.questionFilterSource = "all";
  state.questionFilterText = "";
  render();
}

function resetProgress() {
  if (!window.confirm("できた記録とつまずき記録をすべてリセットしますか？")) {
    return;
  }

  state.completedKana = new Set();
  state.completedFillKana = new Set();
  state.completedWords = new Set();
  state.struggleLog = [];
  localStorage.removeItem(STORAGE_KEY);
  localStorage.removeItem(FILL_STORAGE_KEY);
  localStorage.removeItem(WORD_STORAGE_KEY);
  localStorage.removeItem(STRUGGLE_STORAGE_KEY);
  state.activeLevel = LEVELS.TRACE;
  state.lessonIndex = 0;
  state.fillIndex = 0;
  state.fillQueue = [];
  state.lastFillIndex = -1;
  state.recentFillKeys = [];
  state.wordIndex = 0;
  state.wordQueue = [];
  state.lastWordIndex = -1;
  state.recentWordKeys = [];
  state.wordCharIndex = 0;
  state.customTestId = "";
  state.stageListOpen = false;
  resetCurrentWriting();
  setMessage("きろくを リセットしたよ。1かくめから はじめよう", "normal");
  render();
}

function undoStroke() {
  if (state.completedStrokes.length === 0 || isLessonComplete()) {
    resetCurrentWriting();
    setMessage("1かくめを、まるから おてほんに そって なぞろう", "normal");
  } else {
    state.completedStrokes.pop();
    state.currentStroke = Math.max(0, state.currentStroke - 1);
    setMessage(`${state.currentStroke + 1}かくめを、もういちど なぞろう`, "normal");
  }
  render();
}

function clearLesson() {
  resetCurrentWriting();
  setMessage("1かくめを、まるから おてほんに そって なぞろう", "normal");
  render();
}

function toggleHint() {
  state.showTrace = !state.showTrace;
  render();
}

function handleNextButton() {
  if (state.autoAdvanceTimer && typeof state.autoAdvanceCallback === "function") {
    const next = state.autoAdvanceCallback;
    clearAutoAdvance();
    next();
    return;
  }

  goNextLesson();
}

function syncMenuPanelForViewport() {
  if (state.menuPanelTouched) {
    return false;
  }

  const nextOpen = !compactMenuMedia.matches;
  if (state.menuPanelOpen === nextOpen) {
    return false;
  }

  state.menuPanelOpen = nextOpen;
  if (!nextOpen) {
    state.adultPanelOpen = false;
  }
  return true;
}

function handleWindowResize() {
  resizeCanvas();
  if (syncMenuPanelForViewport()) {
    render();
  }
}

canvas.addEventListener("pointerdown", startDrawing);
canvas.addEventListener("pointermove", continueDrawing);
canvas.addEventListener("pointerup", stopDrawing);
canvas.addEventListener("pointercancel", stopDrawing);
window.addEventListener("resize", handleWindowResize);
undoButton.addEventListener("click", undoStroke);
clearButton.addEventListener("click", clearLesson);
hintButton.addEventListener("click", toggleHint);
nextButton.addEventListener("click", handleNextButton);
menuToggleButton.addEventListener("click", toggleMenuPanel);
stageToggleButton.addEventListener("click", toggleStageList);
adultToggleButton.addEventListener("click", toggleAdultPanel);
customEditorButton.addEventListener("click", toggleCustomEditor);
customImageInput.addEventListener("change", handleCustomImageChange);
customLessonPanel.addEventListener("submit", handleCustomLessonSubmit);
questionListButton.addEventListener("click", toggleQuestionList);
questionFilterLevel.addEventListener("change", updateQuestionFilters);
questionFilterSource.addEventListener("change", updateQuestionFilters);
questionFilterText.addEventListener("input", updateQuestionFilters);
questionFilterResetButton.addEventListener("click", resetQuestionFilters);
exportCustomLessonsButton.addEventListener("click", exportCustomLessons);
importCustomLessonsButton.addEventListener("click", openCustomLessonImport);
importCustomLessonsInput.addEventListener("change", handleCustomLessonsImport);
resetProgressButton.addEventListener("click", resetProgress);
levelZeroButton.addEventListener("click", () => selectLevel(LEVELS.TRACE));
levelOneButton.addEventListener("click", () => selectLevel(LEVELS.FILL));
levelTwoButton.addEventListener("click", () => selectLevel(LEVELS.WORD));
levelThreeButton.addEventListener("click", () => selectLevel(LEVELS.DAKUTEN));
levelFourButton.addEventListener("click", () => selectLevel(LEVELS.SMALL));
levelFiveButton.addEventListener("click", () => selectLevel(LEVELS.LONG));
levelSixButton.addEventListener("click", () => selectLevel(LEVELS.SENTENCE));

resizeCanvas();
render();
loadCustomLessonImages().then(render).catch(() => undefined);
