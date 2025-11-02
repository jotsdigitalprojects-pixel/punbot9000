# Deployment Roadmap: PunBot 9000 🚀

This guide provides step-by-step instructions on how to deploy the PunBot 9000 application from your Google AI Studio project to a live, public URL using GitHub and Vercel.

### Prerequisites

Before you begin, make sure you have the following:

1.  A completed and working project in **Google AI Studio**.
2.  A **[GitHub](https://github.com/)** account.
3.  A **[Vercel](https://vercel.com/)** account (you can sign up for free using your GitHub account).
4.  Your **Google Gemini API Key**.

---

## Step 1: Export Your Project from Google AI Studio

First, you need to get your project code out of AI Studio.

1.  In your AI Studio project, find and click the **"Download code"** button. This will download your entire project as a `.zip` file.
2.  Unzip the downloaded file on your local machine. You should now have a folder containing `index.html`, `index.tsx`, and all other project files.

## Step 2: Create a GitHub Repository

Next, you'll host your code on GitHub, which will allow Vercel to access and deploy it.

1.  Go to [GitHub](https://github.com/) and create a **New repository**.
2.  Give it a name (e.g., `punbot-9000`) and feel free to leave it as a Public repository.
3.  **Do not** initialize it with a README, .gitignore, or license. You already have these files.
4.  Once the repository is created, GitHub will show you commands to "push an existing repository from the command line." Keep this page open.
5.  Open a terminal or command prompt and navigate into the project folder you unzipped in Step 1.
6.  Run the following commands, replacing the repository URL with your own:

    ```bash
    # Initialize a new git repository in your project folder
    git init

    # Add all your project files to be tracked
    git add .

    # Create your first commit
    git commit -m "Initial commit: PunBot 9000"

    # Set the main branch name (common practice)
    git branch -M main

    # Add your new GitHub repository as the "origin"
    git remote add origin https://github.com/your-username/punbot-9000.git

    # Push your code to GitHub
    git push -u origin main
    ```
7.  Refresh your GitHub repository page. You should now see all your project files!

## Step 3: Deploy with Vercel

This is the final step to bring your project to life!

1.  Log in to your [Vercel](https://vercel.com/) dashboard.
2.  Click **"Add New..."** and select **"Project"**.
3.  On the "Import Git Repository" screen, find and **Import** the GitHub repository you just created.
4.  Vercel will try to detect your project's framework. Since this is a static project without a build step, we need to configure it correctly:
    -   **Framework Preset**: Select **"Other"**.
    -   **Build Command**: Leave this **EMPTY**.
    -   **Output Directory**: Leave this as the default.
5.  Next, expand the **"Environment Variables"** section. This is the most important part for connecting to the Gemini API.
    -   Add a new variable:
        -   **Name**: `API_KEY`
        -   **Value**: Paste your **Google Gemini API Key** here.
6.  Click the **"Deploy"** button.

Vercel will now deploy your static site. The process should be very quick. Once it's finished, you'll be presented with a URL where your PunBot 9000 is now live for the world to see!

Congratulations, you've successfully deployed your AI-powered application! 🎉
