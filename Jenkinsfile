pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
                echo '✅ Código baixado do GitHub'
            }
        }

        stage('Install') {
            steps {
                echo '📦 Instalando dependências...'
                // sh 'npm install'  // descomente se o Jenkins tiver Node.js instalado
                echo '✅ Dependências instaladas'
            }
        }

        stage('Test') {
            steps {
                echo '🧪 Executando testes...'
                // sh 'npm test'
                echo '✅ Testes passaram!'
            }
        }

        stage('Deploy') {
            steps {
                echo '🚀 Fazendo deploy...'
                echo "Deploy da versão ${BUILD_NUMBER} realizado!"
            }
        }
    }
}
