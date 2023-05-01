kubectl apply -f https://k8s.io/examples/service/networking/example-ingress.yaml


kubectl create secret generic jwt-secret --from-literal=JWT_KEY=secret