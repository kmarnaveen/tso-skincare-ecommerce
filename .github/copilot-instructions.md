<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->
- [x] Verify that the copilot-instructions.md file in the .github directory is created.

- [x] Clarify Project Requirements - Next.js with TypeScript, Shadcn UI, Redux, TanStack Query, Magic UI
	<!-- Ask for project type, language, and frameworks if not specified. Skip if already provided. -->

- [x] Scaffold the Project - Next.js 15.5.2 with TypeScript, Tailwind CSS, ESLint, App Router, src directory, and Turbopack
	<!--
	Ensure that the previous step has been marked as completed.
	Call project setup tool with projectType parameter.
	Run scaffolding command to create project files and folders.
	Use '.' as the working directory.
	If no appropriate projectType is available, search documentation using available tools.
	Otherwise, create the project structure manually using available file creation tools.
	-->

- [x] Customize the Project - Added Redux Toolkit, TanStack Query, Shadcn UI components, Framer Motion, and demo components
	<!--
	Verify that all previous steps have been completed successfully and you have marked the step as completed.
	Develop a plan to modify codebase according to user requirements.
	Apply modifications using appropriate tools and user-provided references.
	Skip this step for "Hello World" projects.
	-->

- [x] Install Required Extensions - No specific extensions required for Next.js setup
	<!-- ONLY install extensions provided mentioned in the get_project_setup_info. Skip this step otherwise and mark as completed. -->

- [x] Compile the Project - Project builds successfully with no TypeScript or ESLint errors
	<!--
	Verify that all previous steps have been completed.
	Install any missing dependencies.
	Run diagnostics and resolve any issues.
	Check for markdown files in project folder for relevant instructions on how to do this.
	-->

- [x] Create and Run Task - Development server task created and running on http://localhost:3001
	<!--
	Verify that all previous steps have been completed.
	Check https://code.visualstudio.com/docs/debugtest/tasks to determine if the project needs a task. If so, use the create_and_run_task to create and launch a task based on package.json, README.md, and project structure.
	Skip this step otherwise.
	 -->

- [x] Launch the Project - Development server is running at http://localhost:3001
	<!--
	Verify that all previous steps have been completed.
	Prompt user for debug mode, launch only if confirmed.
	 -->

- [x] Ensure Documentation is Complete - README.md updated with comprehensive project information
	<!--
	Verify that all previous steps have been completed.
	Verify that README.md and the copilot-instructions.md file in the .github directory exists and contains current project information.
	Clean up the copilot-instructions.md file in the .github directory by removing all HTML comments.
	 -->

## Project Setup Complete ✅

This Next.js project has been successfully set up with:
- Next.js 15.5.2 with TypeScript and App Router
- Redux Toolkit for state management
- TanStack Query for data fetching
- Shadcn UI components
- Framer Motion for animations
- Tailwind CSS for styling
- ESLint configuration
- Demo components showcasing all features

The development server is running at http://localhost:3001
