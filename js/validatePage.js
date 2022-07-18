export function Page() {
  const linkHome = document.getElementById('#home')
  const linkUniverse = document.getElementById('#universe')
  const linkExploration = document.getElementById('#exploration')
  let pageLinks = [linkHome, linkUniverse, linkExploration]

  const validatePage = () => {
    const link = window.location.pathname

    switch (link != 404) {
      case link == '/':
        pageLinks[0].classList.remove('hidden')
        break
      case link == '/universe':
        pageLinks[1].classList.remove('hidden')
        break
      case link == '/exploration':
        pageLinks[2].classList.remove('hidden')
        break
    }
  }

  return {
    validatePage
  }
}
