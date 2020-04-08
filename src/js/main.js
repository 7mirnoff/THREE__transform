import * as THREE from 'three'
const OrbitControls = require(`three-orbit-controls`)(THREE)
import './modules/polyfill'

import {
  TimelineMax
} from "gsap/all"

import vertexShader from './modules/shader.vert'
import fragmentShader from './modules/shader.frag'
import {
  Plane
} from 'three';

let width = window.innerWidth
let height = window.innerHeight
const canvas = document.getElementById('canvas')

canvas.width = width
canvas.height = height

const renderer = new THREE.WebGLRenderer({
  canvas: canvas
})
const scene = new THREE.Scene()

const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 5000) // в скобочках (угол обзора, порпорции экрана, параметры видимоcти обекта)
camera.position.set(0, 0, 1000)

const light = new THREE.AmbientLight(0xffffff) // рассеяный свет со всех сторон

scene.add(light)

const controls = new OrbitControls(camera, renderer.domElement)

const geometry = new THREE.SphereGeometry(200, 50, 50)
const material = new THREE.MeshBasicMaterial({
  color: 0x00ff00,
  wireframe: true
})

var mash = new THREE.Mesh(geometry, material)

scene.add(mash)

renderer.render(scene, camera)


const animate = () => {
  window.requestAnimationFrame(animate)
  render()
}

const render = () => {
  renderer.render(scene, camera)
}

animate()
