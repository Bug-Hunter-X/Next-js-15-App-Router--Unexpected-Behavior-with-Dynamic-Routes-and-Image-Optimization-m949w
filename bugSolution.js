```javascript
// pages/product/[slug]/page.js

import Image from 'next/image';

export default function Product({ params }) {
  const { slug } = params; //Corrected way to obtain slug
  const imagePath = `/images/${slug}.jpg`;

  return (
    <div>
      <h1>Product: {slug}</h1>
      <Image src={imagePath} alt={`Image for ${slug}`} width={500} height={300} />
    </div>
  );
}
```