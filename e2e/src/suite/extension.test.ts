import * as assert from "assert"
import * as vscode from "vscode"

suite("Wizee Code Extension", () => {
	test("Commands should be registered", async () => {
		const expectedCommands = [
			"wizee.plusButtonClicked",
			"wizee.mcpButtonClicked",
			"wizee.historyButtonClicked",
			"wizee.popoutButtonClicked",
			"wizee.settingsButtonClicked",
			"wizee.openInNewTab",
			"wizee.explainCode",
			"wizee.fixCode",
			"wizee.improveCode",
		]

		const commands = await vscode.commands.getCommands(true)

		for (const cmd of expectedCommands) {
			assert.ok(commands.includes(cmd), `Command ${cmd} should be registered`)
		}
	})
})
