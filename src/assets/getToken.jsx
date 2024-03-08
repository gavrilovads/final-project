const clientId = "6a5287f4b5bc422aa05457e3ba1eac24";
const clientSecret = "b47bcc7df9a4449e92b504221b951ed2";

const getToken = async () => {
  try {
    const response = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        grant_type: "client_credentials",
        client_id: clientId,
        client_secret: clientSecret,
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to fetch access token");
    }

    const data = await response.json();
    const accessToken = data.access_token;

    return accessToken; // Return just the access token value
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
};

export default getToken;
