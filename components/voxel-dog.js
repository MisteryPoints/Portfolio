import { useState, useEffect, useRef, useCallback } from "react"
import { Box, Spinner } from 'three'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { loadGLTFModel } from '../libs/model'

function easeOutCirc(x) {
    return Math.sqrt(1 - Math.pow(x - 1, 4))
}

const VoxelDog = () => {
    const refContainer = useRef()

    return (
        <Box ref={refContainer}>Dog!!!</Box>
    )
}

export default VoxelDog