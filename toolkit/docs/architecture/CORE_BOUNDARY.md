\# ACKIOS Core Boundary



Version: 1.0



Status: Draft



\---



\# Purpose



This document defines the architectural boundaries of ACKIOS.



Its purpose is to separate stable public architecture from proprietary cognitive implementation.



\---



\# Architecture Layers



ACKIOS is divided into four architectural layers.



1\. Platform



2\. SDK



3\. Runtime



4\. Cognitive Core



\---



\# Platform



Platform provides the public foundation of ACKIOS.



Examples:



\- API

\- Builders

\- Contracts

\- Services

\- Events

\- Context

\- Registry

\- Models



Platform SHALL remain public.



\---



\# SDK



SDK enables external developers to extend ACKIOS.



Examples:



\- Plugin API

\- Extension API

\- Runtime API

\- Builders



SDK SHALL remain public.



\---



\# Runtime



Runtime orchestrates execution.



Examples:



\- BrainRuntime

\- BrainPipeline

\- RuntimeContext

\- RuntimeStage

\- RuntimeScheduler

\- RuntimeDispatcher



Runtime SHALL remain public.



Runtime MUST NOT contain proprietary cognitive algorithms.



\---



\# Cognitive Core



Cognitive Core contains proprietary intelligence.



Examples:



\- Attention

\- Goal System

\- Planning

\- Reasoning

\- Prediction

\- Reflection

\- Cause Effect

\- Learning

\- Self Evaluation



Cognitive Core SHALL remain private.



\---



\# Dependency Rules



Platform

&#x20;   ↓

SDK

&#x20;   ↓

Runtime

&#x20;   ↓

Cognitive Core



Dependencies MUST follow this direction.



\---



\# Extension Policy



External developers MAY extend:



\- SDK

\- Runtime

\- Plugins



External developers MUST NOT modify Cognitive Core.



\---



\# Compliance



Every new module SHALL be classified as one of:



\- Platform

\- SDK

\- Runtime

\- Cognitive Core



before implementation begins.

