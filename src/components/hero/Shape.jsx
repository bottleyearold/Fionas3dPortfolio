const Shape = () => {
    return (
        <>
            <Sphere args={[1, 50, 100]} scale={2.4}>
                <MeshDistortMaterial color="#ef1f9f" attach="material" distort={0.5} speed={2}/>
            </Sphere>
            <ambientLight intensity={2} />
            <directionalLight color="ef1f9f" position={[0,0,5]}></directionalLight>
        </>
    );
};

export default Shape