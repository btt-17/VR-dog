# Hướng dẫn phát triển AR dạng Marker với AR.js

## 1. Giới thiệu AR
**AR (Augmented Reality – Thực tế tăng cường)** là công nghệ bổ sung thông tin hình ảnh ảo vào thế giới thực, nhằm mở rộng môi trường thực tế.  
AR có nhiều loại, bao gồm:

- **Dạng marker**  
- **Dạng GPS**  
- **Dạng nhận diện không gian**  
- **Dạng nhận diện vật thể**  

Bài viết này tập trung vào **AR dạng marker**, sử dụng thư viện **AR.js**.

---

## 2. AR dạng marker
- AR dạng marker là loại AR dựa trên thị giác (vision-based), sử dụng hình ảnh làm yếu tố kích hoạt.
- Khi nhận diện hình ảnh và khớp các đặc điểm (feature points), nội dung AR sẽ tự động hiển thị.
- Ví dụ phổ biến: **Hiro marker**.

---

## 3. Phát triển AR dạng marker với AR.js
- Sử dụng **AR.js** – thư viện JavaScript phát triển Web AR.  
- Thư viện được giới thiệu trong bài “[AR.js の世界へようこそ！](https://qiita.com/dsudo/items/58718e9e3c870e6b92e6)”.

### Cấu trúc thư mục
```
.
├── index.html
├── routes.js
├── server.js
├── public
│   ├── sound
│   ├── littlest_tokyo
│   ├── shiba
│   ├── horse
│   └── elephant
└── scripts
    ├── gesture-detector.js
    ├── gesture-handler.js
    └── soundhandler.js
```

---

## 4. Sử dụng AR.js trong HTML
Chèn vào `<head>`:
```html
<script src="https://aframe.io/releases/1.4.0/aframe.min.js"></script>
<script src="https://raw.githack.com/AR-js-org/AR.js/master/aframe/build/aframe-ar.js"></script>
```

---

## 5. Thêm nội dung AR
Ví dụ hiển thị voi (`elephant`) khi nhận diện marker Hiro:
```html
<a-scene arjs embedded>
  <a-assets>
    <a-asset-item id="model" src="public/elephant/scene.gltf"></a-asset-item>
  </a-assets>
  <a-marker preset="hiro">
    <a-entity position="0 0 0" scale="1 1 1" gltf-model="#model" animation-mixer></a-entity>
  </a-marker>
  <a-entity camera></a-entity>
</a-scene>
```

---

## 6. Thêm nhiều nội dung và chọn model
```js
function changeModel(modelParam) {
  let modelName = modelParam.value.toLowerCase();
  if (modelName==="elephant") {
      document.querySelector("a-entity").setAttribute("gltf-model", "public/elephant/scene.gltf");
      document.querySelector("a-entity").setAttribute("scale", "0.02 0.02 0.02");
  }
}
```

---

## 7. Zoom và xoay model
- `gesture-detector.js`: phát hiện thao tác chạm.
- `gesture-handler.js`: xử lý xoay và scale model.

Chèn vào HTML:
```html
<a-scene gesture-detector>
<a-entity gesture-handler></a-entity>
```

---

## 8. Thêm âm thanh
- `soundhandler.js`: phát/tạm dừng âm thanh khi marker xuất hiện/mất.
- Gán thuộc tính `sound="src: ..."` vào `<a-entity>`.

---

## 9. Tài liệu tham khảo
1. https://www.japancv.co.jp/column/4190/
2. https://qiita.com/dsudo/items/58718e9e3c870e6b92e6
3. https://ar-js-org.github.io/AR.js-Docs/
