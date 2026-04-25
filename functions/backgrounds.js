export async function onRequest(context) {
  // List of image URLs
  const images = [
    "https://picsum.photos/640/360",
    "https://placekitten.com/640/360",
    "https://file.garden/aUYIWVAKvQxCBY-_/miscbgs/gplay-1920x1080.png",
    "https://file.garden/aUYIWVAKvQxCBY-_/miscbgs/dog.jpeg"
  ];

  // Pick a random image
  const randomImage = images[Math.floor(Math.random() * images.length)];

try {
    const response = await fetch(randomImage);

    // always use 200 
    if (!response.ok) {
      return new Response(await fetch("https://file.garden/aUYIWVAKvQxCBY-_/bgs/bg1.jpg");, { status: 200 });
    }

    return new Response(response.body, {
      headers: {
        "Content-Type": response.headers.get("Content-Type") || "image/jpeg",
        "Cache-Control": "no-store",
        "Access-Control-Allow-Origin": "*"
      }
    });

  } catch (err) {
    // If fetch throws (network failure, DNS, etc.)
    return new Response("<h1>IMAGE GRAB WASN'T OK!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!</h1>", { status: 400 });
  }
  };
