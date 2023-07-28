async function CleandeskWidgetLogout() {
  console.log("logout function called from CleandeskWidgetLogout");
  let cookie = {};
  document.cookie.split(";").forEach(function (el) {
    let [key, value] = el.split("=");
    cookie[key.trim()] = value;
  });
  const response = await fetch(
    "https://test.cleandesk.co.in/api/v1/rl/logout/",
    {
      method: "POST",
      headers: {
        Authorization: "Token " + cookie.cleandesk_userToken,
      },
      body: JSON.stringify({}),
    }
  );
  const data = await response.json();
  if (data.statusCode === "S10001") {
    deleteCookie("cleandesk_userToken");
    deleteCookie("cleandesk_personId");
    deleteCookie("cleandesk_personOrgOfficeId");
    // location.reload();
  }
}

function deleteCookie(name) {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
}
