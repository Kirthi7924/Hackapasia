document.getElementById("energy-form").addEventListener("submit", async (e) => {
    e.preventDefault();
  
    const features = document.getElementById("features").value.split(",").map(Number);
  
    try {
      const response = await fetch("/optimize", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ features }),
      });
  
      const result = await response.json();
      document.getElementById("result").innerText =
        Optimized Energy Usage: ${result.optimized_energy};
    } catch (error) {
      document.getElementById("result").innerText = "Error processing request.";
    }
  });