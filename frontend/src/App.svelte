<script>
  import { fetchEntry, addEntry } from "./lib/api";

  let date = "";
  let content = "";
  let entry = "";
  let error = "";

  async function handleAddEntry() {
    try {
      error = "";
      const message = await addEntry(date, content);
      alert(message);
      content = ""; // Eingabefeld zurücksetzen
    } catch (err) {
      error = "Fehler beim Speichern des Eintrags.";
    }
  }

  async function handleGetEntry() {
    try {
      error = "";
      entry = await fetchEntry(date);
    } catch (err) {
      error = "Fehler beim Abrufen des Eintrags.";
    }
  }
</script>

<style>
  :global(body) {
    margin: 0;
    font-family: 'Arial', sans-serif;
    background-color: #f0f2f5;
    color: #333;
  }

  main {
    max-width: 600px;
    margin: 50px auto;
    padding: 20px;
    background: white;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  h1 {
    text-align: center;
    color: #3f51b5;
    font-size: 2rem;
    margin-bottom: 20px;
  }

  .form-container {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  label {
    font-weight: bold;
    margin-bottom: 5px;
  }

  input,
  textarea {
    width: 90%;
    padding: 10px;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 8px;
    outline: none;
    transition: border-color 0.2s;
    background-color: #2c387e;
  }

  input:focus,
  textarea:focus {
    border-color: #3f51b5;
  }

  .buttons {
    display: flex;
    gap: 10px;
    justify-content: center;
  }

  button {
    padding: 10px 20px;
    font-size: 1rem;
    font-weight: bold;
    color: white;
    background-color: #3f51b5;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  button:hover {
    background-color: #2c387e;
  }

  .entry-card {
    margin-top: 30px;
    padding: 20px;
    background: #f9f9f9;
    border: 1px solid #ddd;
    border-radius: 8px;
  }

  .entry-card h3 {
    margin: 0 0 10px;
    color: #3f51b5;
  }

  .error {
    color: red;
    text-align: center;
    margin-top: 20px;
    font-weight: bold;
  }
</style>

<main>
  <h1>Diary App</h1>

  <div class="form-container">
    <div>
      <label for="date">Datum:</label>
      <input
        id="date"
        type="date"
        bind:value={date}
      />
    </div>

    <div>
      <label for="content">Eintrag:</label>
      <textarea
        id="content"
        bind:value={content}
        rows="4"
        placeholder="Schreibe deinen Tagebucheintrag hier..."
      ></textarea>
    </div>

    <div class="buttons">
      <button on:click={handleAddEntry}>Eintrag speichern</button>
      <button on:click={handleGetEntry}>Eintrag anzeigen</button>
    </div>
  </div>

  {#if entry}
    <div class="entry-card">
      <h3>Eintrag vom {date}:</h3>
      <p>{entry}</p>
    </div>
  {/if}

  {#if error}
    <div class="error">{error}</div>
  {/if}
</main>
