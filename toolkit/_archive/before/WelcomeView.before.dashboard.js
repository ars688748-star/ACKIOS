export class WelcomeView {

    render(){

        return `

<section class="welcome-view">

    <div class="welcome-content">

        <h1>Welcome to ACKIOS</h1>

        <p>
            Adaptive Cognitive Kernel Intelligence Operating System
        </p>


        <div class="welcome-actions">

            <button id="welcome-open-project">
                Open Existing Project
            </button>


            <button id="welcome-create-project">
                Create New Project
            </button>

        </div>


        <div class="recent-projects">

            <h2>
                Recent Projects
            </h2>


            <div id="recent-project-list">

                No recent projects

            </div>

        </div>


    </div>

</section>

`;

    }

}
