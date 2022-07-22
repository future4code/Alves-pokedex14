export const goToPokedex = (navigate) => {
  navigate("/pokedex")
}

export const goToHome = (navigate) => {
  navigate("/")
}

export const goToHomeNext = (navigate, number) => {
  navigate(`/${number}`)
  if (+number < 0) {
    navigate(`/${0}`)
  }
}

export const Next = (navigate, number) => {
  navigate(`/${number}`)
}

export const goToDetailsPage = (navigate, name) => {
  navigate(`/details/${name}`)
}

export const goToDetailsPokedexPage = (navigate, name) => {
  navigate(`/pokedex/details/${name}`)
}

export const goBack = (navigate) => {
  navigate(-1)
}