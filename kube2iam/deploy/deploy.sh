#!/bin/bash

NAMESPACE="kube2iam"

# Create namespace if it does not exist
kubectl get namespace $NAMESPACE > /dev/null 2>&1 || kubectl create namespace $NAMESPACE

# Deploy kueb2iam
kubectl apply -k kustomize/base -n $NAMESPACE