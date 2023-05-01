docker build -t nikolinmajmari/ticketing-auth ./auth
docker push nikolinmajmari/ticketing-auth 
kubectl rollout restart deployment