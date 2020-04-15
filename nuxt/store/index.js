export const strict = false

export const state = () => ({
    windowSize: {
        x: 0,
        y: 0
    }
})

export const mutations = {
    mutateWindowSize(state){
        state.windowSize = { x: window.innerWidth, y: window.innerHeight }
    }
}

