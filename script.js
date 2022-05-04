const APIURL = "https://api.github.com/users/"

const main = document.getElementById("main")
const form = document.getElementById("form")
const search = document.getElementById("search")

async function getUser(username) {
  try {
    const { data } = await axios(APIURL + username)
  } catch(err) {
    if (err.response.status == 404) {
      console.log("No profile with this username")
    }
  }
}
