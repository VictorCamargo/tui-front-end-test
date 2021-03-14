const getDefaultState = () => {
  return {
    current_currency: 'euro',
    currencies: [
      { name: 'euro', label: 'Euro - €', isoName: 'EUR €' },
      { name: 'real', label: 'Brazilian Real - R$', isoName: 'BRL R$' },
      { name: 'dollar', label: 'US Dollar - $', isoName: 'USD $' }
    ]
  }
}

export const state = () => getDefaultState()

export const getters = {
  currency: state => {
    return state.currencies.find(
      currency => currency.name === state.current_currency
    )
  },

  availableCurrencies: state => {
    return state.currencies.filter(
      currency => currency.name !== state.current_currency
    )
  }
}

export const mutations = {
  setCurrency(state, value) {
    state.current_currency = value
  }
}

export const actions = {
  setCurrency({ commit }, currency) {
    commit('setCurrency', currency)
  }
}
