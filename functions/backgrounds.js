export async function onRequest(context) {
  // List of image URLs
  const images = [
    "https://picsum.photos/640/360",
    "https://placekitten.com/640/360",
    "https://static.wikitide.net/windowswallpaperwiki/thumb/1/11/Img0_%28Windows_8.1%29.jpg/1280px-Img0_%28Windows_8.1%29.jpg"
  ];

  // Pick a random image
  const randomImage = images[Math.floor(Math.random() * images.length)];

try {
    const response = await fetch(randomImage);

    // If the fetch worked but returned an error status
    if (!response.ok) {
      return new Response("Failed to fetch background", { status: 500 });
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
