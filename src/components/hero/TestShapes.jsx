import { MeshDistortMaterial, OrbitControls,Sphere } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"

const TestShapes = () => {
    return (
        <section style={{display:"flex", alignItems:"center",justifyContent:"center"}}>
            <Canvas>
                <mesh>
                    <Sphere args={[1, 50, 100]} scale={2.4}>
                        <MeshDistortMaterial color="#ef1f9f" attach="material" distort={0.4} speed={1.7}/>
                    </Sphere>
                    <ambientLight intensity={2} />
                    {/* <meshStandardMaterial color="#ef1f9f" /> */}
                    <directionalLight color="ef1f9f" position={[0,0,5]}></directionalLight>
                </mesh>
            </Canvas>
        </section>
    )
}

export default TestShapes