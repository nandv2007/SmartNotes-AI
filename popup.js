document.getElementById("summarizeBtn").addEventListener("click", async () => {
  const input = document.getElementById("inputText").value.trim();
  const output = document.getElementById("output");

  if (!input) {
    output.textContent = "⚠️ Please enter some text to summarize.";
    return;
  }

  output.textContent = "⏳ Summarizing... please wait.";

  try {
    // Use Chrome's Built-in AI API
    const session = await ai.languageModel.create();
    const result = await session.prompt(`Summarize this text in 3-4 sentences: ${input}`);
    output.textContent = result;
  } catch (error) {
    console.error("AI Error:", error);
    output.textContent = "❌ Built-in AI not available. Try Chrome Dev/Canary (M130+) with 'Prompt API' enabled.";
  }
});
